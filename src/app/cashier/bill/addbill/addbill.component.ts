import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { BillService } from 'src/app/services/bill/bill.service';
import { Bill, BillToAdd } from 'src/app/interfaces/bill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// Simplified LineItem interface for frontend
interface LineItem {
  article: string; // Will store article _id
  articleName?: string; // For display purposes
  quantite: number;
  prixUnitaire: number;
}


@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddbillComponent implements OnInit {
  billForm: FormGroup;
  lineItems: LineItem[] = [];
  clients: Customer[] = [];
  // Placeholder for articles (you'll need an ArticleService)
  articles: Article[] = []; // Replace the any[] with Article[]
 // Replace with actual Article interface
  menuSidebarActive: boolean = false;
  menuShortcutActive: boolean = false;
  notifyShortcutActive: boolean = false;
  emailShortcutActive: boolean = false;
  langShortcutActive: boolean = false;
  proShortcutActive: boolean = false;
 articleList: Article[] = [];
  private subscription: Subscription = new Subscription();
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  searchTerm = '';
  constructor(
    private router: Router,
    private clientService: CustomerService,
    private billService: BillService,
    private articleService:ArticleService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.billForm = this.fb.group({
      client: ['', Validators.required], // Client _id
      type: ['invoice', Validators.required],
      dateFacturation: [new Date(), Validators.required],
      tvaRate: [20, [Validators.required, Validators.min(0)]],
      purchaseOrderId: [''],
    });
  }

ngOnInit(): void {
  this.loadArticles()
   
    // Load clients
    this.clientService.getCustomers().subscribe({
      next: (data) => {
        this.clients = data;
        console.log('Clients loaded:', this.clients);
      },
      error: (err) => {
        console.error('Error fetching customers', err);
        this.snackBar.open('Error loading clients', 'Close', { duration: 3000 });
      }
    });

    // TODO: Load articles (you'll need an ArticleService)
    // Example: this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
loadArticles() {
  this.subscription.add(
    this.articleService.getArticles(this.currentPage, this.itemsPerPage, this.searchTerm).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.articleList = response.data; 
        this.articles = response.data; // Populate both arrays
        this.totalItems = response.pagination.total;
      },
      error: (error) => {
        console.error("Error loading articles:", error);
        this.snackBar.open('Failed to load articles', 'Close', { duration: 3000 });
      }
    })
  );
}

  // Sidebar and header methods (unchanged)
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  shortmenu() {
    this.menuShortcutActive = !this.menuShortcutActive;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  notifydropdown() {
    this.notifyShortcutActive = !this.notifyShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  emaildropdown() {
    this.emailShortcutActive = !this.emailShortcutActive;
    this.menuShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  langdropdown() {
    this.langShortcutActive = !this.langShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.proShortcutActive = false;
  }

  prodropdown() {
    this.proShortcutActive = !this.proShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
  }

  // Add a line item
  addLineItem(article: Article) {
  if (!article._id) {
    console.error('Article _id is undefined, cannot add line item');
    return;
  }
  // Check if article already exists in lineItems
  const existingItem = this.lineItems.find(item => item.article === article._id);
  
  if (existingItem) {
    existingItem.quantite++;
  } else {
    this.lineItems.push({
      article: article._id,
      articleName: article.code, // For display in the UI
      quantite: 1,
      prixUnitaire: article.prixAchat || 0
    });
  }
}
  // Remove a line item
  removeLineItem(index: number) {
    this.lineItems.splice(index, 1);
  }

  // Update quantity
  updateQuantity(index: number, type: 'add' | 'minus') {
    if (type === 'add') {
      this.lineItems[index].quantite++;
    } else if (this.lineItems[index].quantite > 1) {
      this.lineItems[index].quantite--;
    }
  }

  // Calculate total (for display purposes)
  calculateTotal(): number {
    const totalHT = this.lineItems.reduce((sum, item) => sum + (item.quantite * item.prixUnitaire), 0);
    const tvaRate = this.billForm.get('tvaRate')?.value || 20;
    const totalTTC = totalHT + (totalHT * tvaRate / 100);
    return totalTTC;
  }

  // Submit the bill
  onSubmit() {
    if (this.billForm.invalid || this.lineItems.length === 0) {
      this.snackBar.open('Please fill all required fields and add at least one product', 'Close', { duration: 3000 });
      return;
    }

    const billToAdd: BillToAdd = {
      client: this.billForm.get('client')?.value,
      type: this.billForm.get('type')?.value,
      lignes: this.lineItems.map(item => ({
        article: item.article,
        quantite: item.quantite,
        prixUnitaire: item.prixUnitaire
      })),
      tvaRate: this.billForm.get('tvaRate')?.value,
      purchaseOrderId: this.billForm.get('663b269e3e5a0c001bb2e6dd')?.value
    };

    this.billService.addBill(billToAdd).subscribe({
      next: (response) => {
        if (response.success) {
          this.snackBar.open('Bill added successfully!', 'Close', { duration: 3000 });
          this.billForm.reset();
          this.lineItems = [];
          this.billService.notifyBillUpdated();
                  this.router.navigate(['/bill/managebill']);

        } else {
          this.snackBar.open(response.error || 'Error adding bill', 'Close', { duration: 3000 });
        }
      },
      error: (err) => {
        this.snackBar.open('Error adding bill: ' + (err.error?.error || 'Server error'), 'Close', { duration: 3000 });
        console.error('Error adding bill', err);
      }
    });
  }
}
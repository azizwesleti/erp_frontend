import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseOrderToAdd } from 'src/app/interfaces/purchase-order';
import { ArticleService } from 'src/app/services/article.service';
import { PurchaseOrderService } from 'src/app/services/purchase-order/purchase-order.service';
import { ConfirmSubmitPopupComponent } from '../../ledger/confirm-submit-popup/confirm-submit-popup.component';
import { Article } from 'src/app/interfaces/article';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { PurchaseClientService } from 'src/app/services/purchase-client/purchase-client.service';
import { PurchaseClientToAdd } from 'src/app/interfaces/purchase-client';

interface LineItem {
  article: string; // Will store article _id
  articleName?: string; // For display purposes
  quantite: number;
  prixUnitaire: number;
}


@Component({
  selector: 'app-creditvoucher',
  templateUrl: './creditvoucher.component.html',
  styleUrls: ['./creditvoucher.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class CreditvoucherComponent implements OnInit {

  lineItems: LineItem[] = [];
  articleList: Article[] = [];
  customerList: Customer [] = [];
  private subscription: Subscription = new Subscription();
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  searchTerm = ''; 

  purchaseclientForm!: FormGroup<{
  customerId: FormControl<string>;
  /* products: FormArray<FormGroup<{
    productId: FormControl<string>;
    quantity: FormControl<number>;
    price: FormControl<number>;
  }>>; */
  status: FormControl<string>;
  date: FormControl<string>;
  }>;
  //purchaseclientForm: FormGroup<{ customerId: FormControl<string>; status: FormControl<string>; date: FormControl<string>; }>;

  constructor(private articleService: ArticleService, 
          private purchaseclientService: PurchaseClientService, 
          private customerService: CustomerService, 
          private fb : NonNullableFormBuilder,
          public dialog: MatDialog,
          private snackBar: MatSnackBar) {

    this.purchaseclientForm = this.fb.group({
          customerId: ['', Validators.required],
          status: ['en attente' , [Validators.required]],
         /*  products: this.fb.array([
                this.createProductGroup()
              ]), */
          date: ['', Validators.required]
          });
  }

/*   createProductGroup(): FormGroup<{
      productId: FormControl<string>;
      quantity: FormControl<number>;
      price: FormControl<number>;
    }> {
      return this.fb.group({
        productId: ['', Validators.required],
        quantity: [0 , Validators.required],
        price: [0 , Validators.required]
      });
    } */

    ngOnInit(): void {
        this.loadArticles();
        this.loadCustomers();

    }

    onSubmit() {
        if(this.purchaseclientForm.valid) {
          const data = { ...this.purchaseclientForm.value } ;
          const products = (this.lineItems ?? []).map(p => ({
            productId: p?.article ?? '',
            quantity: p?.quantite ?? 0,
            price: p?.prixUnitaire ?? 0
          }));
    
          const purchaseCustomerData: PurchaseClientToAdd = {
          clientId: data.customerId,
          status: data.status as 'en attente' | 'payée' | 'annulée',
          date: data.date,
          products: products
    };
    
        console.log('Prepared purchaseclient data:', purchaseCustomerData);
    
          console.log("data regestred in form", data);  
    
          this.purchaseclientService.addPurchaseClient(purchaseCustomerData).subscribe({
            next: (response) => {
              console.log("Purchase-Order-client created succesfully", response);
              this.confirmCreationPopup();
            },
            error: (error) => { 
              console.error("error while creating Purchase-Order-client",error);
              }
          })
        } else {
        console.error("form is invalid");
      }
    }

  loadArticles() {
    this.subscription.add(
      this.articleService.getArticles(this.currentPage, this.itemsPerPage, this.searchTerm).subscribe({
        next: (response) => {
          this.articleList = response.data; 
          this.totalItems = response.pagination.total;
          console.log('la list des article est:', this.articleList);

        },
        error: (error) => {
          console.error("Error loading articles:", error);
          this.snackBar.open('Failed to load articles', 'Close', { duration: 3000 });
        }
      })
    );
  }

  loadCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (response : any) => {
        this.customerList = response;
        console.log("la list des clients est : ", this.customerList);
        },
        error: (error: any) => {
          console.error(error);
          }
    })
  }

  confirmCreationPopup() {
        this.dialog.open(ConfirmSubmitPopupComponent);
  }

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

  
  removeLineItem(index: number) {
    this.lineItems.splice(index, 1);
  }

  updateQuantity(index: number, type: 'add' | 'minus') {
    if (type === 'add') {
      this.lineItems[index].quantite++;
    } else if (this.lineItems[index].quantite > 1) {
      this.lineItems[index].quantite--;
    }
  }


  calculateTotal(): number {
    const totalHT = this.lineItems.reduce((sum, item) => sum + (item.quantite * item.prixUnitaire), 0);
    return totalHT;
  }

  //sidebar menu activation start
  menuSidebarActive:boolean=false;
  myfunction(){
    if(this.menuSidebarActive==false){
      this.menuSidebarActive=true;
    }
    else {
      this.menuSidebarActive=false;
    }
  }
  //sidebar menu activation end

  hide = true;

  //add or remove row on click
  addRow = ['1']
  handleAddRow(n:any){
     this.addRow.push(n)
  }
  handleClearRow(){
    if(this.addRow.length > 1){
      this.addRow.pop()
    }
  }
  //add or remove row on click

  //header activation start here
menuShortcutActive:boolean=false;
shortmenu(){
  if(this.menuShortcutActive==false){
    this.menuShortcutActive=true;
    this.emailShortcutActive=false;
    this.notifyShortcutActive=false;
    this.langShortcutActive=false;
    this.proShortcutActive=false;
  }
  else {
    this.menuShortcutActive=false;
  }
}

notifyShortcutActive:boolean=false;
notifydropdown(){
  if(this.notifyShortcutActive==false){
    this.menuShortcutActive=false;
    this.emailShortcutActive=false;
    this.notifyShortcutActive=true;
    this.langShortcutActive=false;
    this.proShortcutActive=false;
  }
  else {
    this.notifyShortcutActive=false;
  }
}

emailShortcutActive:boolean=false;
emaildropdown(){
  if(this.emailShortcutActive==false){
    this.menuShortcutActive=false;
    this.emailShortcutActive=true;
    this.notifyShortcutActive=false;
    this.langShortcutActive=false;
    this.proShortcutActive=false;
  }
  else {
    this.emailShortcutActive=false;

  }
}

langShortcutActive:boolean=false;
langdropdown(){
  if(this.langShortcutActive==false){
    this.menuShortcutActive=false;
    this.emailShortcutActive=false;
    this.notifyShortcutActive=false;
    this.langShortcutActive=true;
    this.proShortcutActive=false;
  }
  else {
    this.langShortcutActive=false;

  }
}

proShortcutActive:boolean=false;
prodropdown(){
  if(this.proShortcutActive==false){
    this.menuShortcutActive=false;
    this.emailShortcutActive=false;
    this.notifyShortcutActive=false;
    this.langShortcutActive=false;
    this.proShortcutActive=true;
  }
  else {
    this.proShortcutActive=false;

  }
}
//header activation end here



}

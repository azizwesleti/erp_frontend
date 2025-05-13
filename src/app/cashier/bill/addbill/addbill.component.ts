import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { BillService } from 'src/app/services/bill/bill.service'; // Import BillService
import { Bill, BillToAdd } from 'src/app/interfaces/bill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // For reactive forms
import { MatSnackBar } from '@angular/material/snack-bar'; // For notifications

interface LineItem {
  product: string;
  batchNo: string;
  unit: string;
  price: number;
  quantity: number;
  discount: number;
  tax: number;
  subTotal: number;
}

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddbillComponent implements OnInit {
  // Form group for bill details
  billForm: FormGroup;
  // Array to store line items
  lineItems: LineItem[] = [];
  // Clients list
  clients: Customer[] = [];
  // Sidebar and header states (unchanged)
  menuSidebarActive: boolean = false;
  menuShortcutActive: boolean = false;
  notifyShortcutActive: boolean = false;
  emailShortcutActive: boolean = false;
  langShortcutActive: boolean = false;
  proShortcutActive: boolean = false;

  constructor(
    private clientService: CustomerService,
    private billService: BillService, // Inject BillService
    private fb: FormBuilder, // For reactive forms
    private snackBar: MatSnackBar // For notifications
  ) {
    // Initialize the form
    this.billForm = this.fb.group({
      clientName: ['', Validators.required],
      type: ['bill', Validators.required], // Default to 'bill', adjust as needed
      status: ['pending', Validators.required], // Default to 'pending'
      dateFacture: ['', Validators.required],
      dateFacturation: ['', Validators.required],
      orderNumber: [''],
      tvaRate: [0, [Validators.required, Validators.min(0)]],
      discount: [0, Validators.min(0)],
      shipping: [0, Validators.min(0)],
      purchaseNote: ['']
    });
  }

  ngOnInit(): void {
    // Load clients
    this.clientService.getCustomers().subscribe({
      next: (data) => {
        this.clients = data;
        console.log('Clients loaded:', this.clients);
      },
      error: (err) => {
        console.error('Error fetching customers', err);
      }
    });
  }

  // Sidebar toggle (unchanged)
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  // Header shortcuts (unchanged)
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
  addLineItem(product: string, batchNo: string, unit: string, price: number, quantity: number, discount: number, tax: number) {
    const subTotal = (price * quantity) - discount + tax;
    this.lineItems.push({
      product,
      batchNo,
      unit,
      price,
      quantity,
      discount,
      tax,
      subTotal
    });
    this.calculateTotal();
  }

  // Remove a line item
  removeLineItem(index: number) {
    this.lineItems.splice(index, 1);
    this.calculateTotal();
  }

  // Update quantity
  updateQuantity(index: number, type: 'add' | 'minus') {
    if (type === 'add') {
      this.lineItems[index].quantity++;
    } else if (this.lineItems[index].quantity > 0) {
      this.lineItems[index].quantity--;
    }
    this.lineItems[index].subTotal = (this.lineItems[index].price * this.lineItems[index].quantity) - this.lineItems[index].discount + this.lineItems[index].tax;
    this.calculateTotal();
  }

  // Calculate total
  calculateTotal(): number {
    const subtotal = this.lineItems.reduce((sum, item) => sum + item.subTotal, 0);
    const tvaRate = this.billForm.get('tvaRate')?.value || 0;
    const discount = this.billForm.get('discount')?.value || 0;
    const shipping = this.billForm.get('shipping')?.value || 0;
    const taxAmount = subtotal * (tvaRate / 100);
    const total = subtotal + taxAmount - discount + shipping;
    return total;
  }

  // Submit the bill
  onSubmit() {
    if (this.billForm.invalid) {
      this.snackBar.open('Please fill all required fields', 'Close', { duration: 3000 });
      return;
    }

    const billToAdd: BillToAdd = {
      clientName: this.billForm.get('clientName')?.value,
      type: this.billForm.get('type')?.value,
      status: this.billForm.get('status')?.value,
      dateFacture: this.billForm.get('dateFacture')?.value,
      dateFacturation: this.billForm.get('dateFacturation')?.value
    };

    const fullBill: Bill = {
      ...billToAdd,
      lignes: this.lineItems,
      total: this.calculateTotal(),
      tvaRate: this.billForm.get('tvaRate')?.value
    };

    this.billService.addBill(billToAdd).subscribe({
      next: (response) => {
        this.snackBar.open('Bill added successfully!', 'Close', { duration: 3000 });
        this.billForm.reset();
        this.lineItems = [];
      },
      error: (err) => {
        this.snackBar.open('Error adding bill', 'Close', { duration: 3000 });
        console.error('Error adding bill', err);
      }
    });
  }
}
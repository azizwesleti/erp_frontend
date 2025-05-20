import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentinvoicepopupComponent } from '../../popup/paymentinvoicepopup/paymentinvoicepopup.component';
import { Payment } from 'src/app/interfaces/payment';
import { Subscription } from 'rxjs';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { DatePipe } from '@angular/common';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-paymentlistinvoice',
  templateUrl: './paymentlistinvoice.component.html',
  styleUrls: ['./paymentlistinvoice.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class PaymentlistinvoiceComponent implements OnInit {

  paymentInvoiceList : Payment[]=[] ;
  private subscription: Subscription = new Subscription();

  //checkbox start
  task: Task = {
    name: '',
    completed: false,
    color: 'primary',
    
  };
  isComplete : boolean = false;
  allComplete: boolean = false;
  oneComplete: boolean = false;
  twoComplete: boolean = false;
  threeComplete: boolean = false;
  fourComplete: boolean = false;
  fiveComplete: boolean = false;
  sixComplete: boolean = false;
  sevenComplete: boolean = false;
  eightComplete: boolean = false;
  nineComplete: boolean = false;
  tenComplete: boolean = false;
  elevenComplete: boolean = false;
  twelveComplete: boolean = false;
  thirteenComplete: boolean = false;
  fourteenComplete: boolean = false;
  fifteenComplete: boolean = false;
  sixteenComplete: boolean = false;
  disabled_condition = true;



    constructor(private paymentService: PaymentService,  private datePipe: DatePipe,  public dialog: MatDialog) {}


  ngOnInit(): void {
    // Load initial supplier list
    this.loadPayments();

    // Subscribe to supplier update notifications
    this.subscription.add(
      this.paymentService.onPaymentUpdated().subscribe(() => {
        console.log('Payment update notification received, reloading suppliers');
        this.loadPayments();
      })
    );
  }

  loadPayments()  {  

     this.paymentService.getPayments().subscribe({
      next: (response : any) => {
        this.paymentInvoiceList = response ;
        console.log("la list des payments est : ", this.paymentInvoiceList);
        },
        error: (error: any) => {
          console.error(error);
          }
    })
  }

  deletePayment(paymentId: any): void {
  if (confirm('Are you sure you want to delete this payment?')) {
    this.paymentService.deletePayment(paymentId).subscribe({
      next: () => {
        // Payment deleted successfully, refresh the list
        this.loadPayments();
        // You could also add a notification/toast here
        console.log('Payment deleted successfully');
      },
      error: (error: any) => {
        console.error('Error deleting payment:', error);
        // Handle error (show error message, etc.)
      }
    });
  }
}


  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck1(completed: boolean) {
    console.log(this.oneComplete);
    console.log(completed);
    this.oneComplete = completed;
    if(completed) {
      this.isComplete = completed;
    }
    if( !this.sixteenComplete && !this.fifteenComplete && !this.fourteenComplete && !this.thirteenComplete && !this.twelveComplete && !this.elevenComplete && !this.tenComplete && !this.nineComplete && !this.eightComplete && !this.sevenComplete && !this.sixComplete && !this.fiveComplete && !this.fourComplete && !this.threeComplete && !this.twoComplete && !this.oneComplete ) {
      this.isComplete = completed;
    }
  }
 
  //checkbox end

  
  paymentInvoice() {
    this.dialog.open(PaymentinvoicepopupComponent);
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

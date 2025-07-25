import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpaymentpopupComponent } from '../../popup/addpaymentpopup/addpaymentpopup.component';
import { BilldetailspopupComponent } from '../../popup/billdetailspopup/billdetailspopup.component';
import { SendbillpopupComponent } from '../../popup/sendbillpopup/sendbillpopup.component';
import { Bill, BillCustomer } from 'src/app/interfaces/bill';
import { Subscription } from 'rxjs';
import { BillCustomerService } from 'src/app/services/bill-customer/bill-customer.service';
import { DatePipe } from '@angular/common';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-customermanagebill',
  templateUrl: './customermanagebill.component.html',
  styleUrls: ['./customermanagebill.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class CustomermanagebillComponent implements OnInit {

 billList : BillCustomer[] = [];
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
 
   constructor(private billCusomerService: BillCustomerService, private datePipe: DatePipe, public dialog: MatDialog) {}
 
    ngOnInit(): void {
     // Load initial supplier list
     this.loadBills();
 
     // Subscribe to supplier update notifications
     this.subscription.add(
       this.billCusomerService.onBillUpdated().subscribe(() => {
         console.log('Supplier update notification received, reloading suppliers');
         this.loadBills();
       })
     );
   }
 
   loadBills() { 
   this.billCusomerService.getBills().subscribe({
       next: (response : any) => {
         this.billList = response.data;
         console.log("la list des factures est : ", this.billList);
         },
         error: (error: any) => {
           console.error(error);
           }
     })
   }
 
   formatDate(date: string): string {
     return this.datePipe.transform(date, 'dd MMM yyyy') || '';
   }
 
   onDelete(id : string) {
     this.billCusomerService.deleteBill(id).subscribe({
           next: (response : any) => {
             
             console.log("La factures à était supprimer avec ID : ", id);
             },
             error: (error: any) => {
               console.error(error);
               }
         })
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
 
   
   addPaymentPopup() {
     this.dialog.open(AddpaymentpopupComponent);
   }
   sendPaymentPopup() {
     this.dialog.open(SendbillpopupComponent);
   }
   billDetailsPopup(bill : BillCustomer) {
     this.dialog.open(BilldetailspopupComponent, {
           data: {
             bill_id: bill._id, // Pass the supplier object to the dialog
             
           },       
         });
         console.log("facture choisit : ", bill._id);  
 
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

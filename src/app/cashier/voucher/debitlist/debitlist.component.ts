import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DebitvoucherpopupComponent } from '../../popup/debitvoucherpopup/debitvoucherpopup.component';
import { PurchaseOrder } from 'src/app/interfaces/purchase-order';
import { PurchaseOrderService } from 'src/app/services/purchase-order/purchase-order.service';
import { DatePipe } from '@angular/common';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
//for checkbox

@Component({
  selector: 'app-debitlist',
  templateUrl: './debitlist.component.html',
  styleUrls: ['./debitlist.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class DebitlistComponent implements OnInit {

  purchaseOrderList : PurchaseOrder []= []
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

  constructor(private purchaseOrderService: PurchaseOrderService, private datePipe: DatePipe, public dialog: MatDialog) {}
  
  
  ngOnInit(): void {
     this.loadPurchaseOrder();
  }

  loadPurchaseOrder(){
    this.purchaseOrderService.getPurchaseOrders().subscribe({
      next: (response : any) => {
        this.purchaseOrderList = response;
        console.log("la list des Purchase Order est : ", this.purchaseOrderList);
        },
        error: (error: any) => {
          console.error(error);
          }
    })
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

  

  debitVoucherPopup() {
    this.dialog.open(DebitvoucherpopupComponent);
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

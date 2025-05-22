import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpaymentpopupComponent } from '../../popup/addpaymentpopup/addpaymentpopup.component';
import { BilldetailspopupComponent } from '../../popup/billdetailspopup/billdetailspopup.component';
import { SendbillpopupComponent } from '../../popup/sendbillpopup/sendbillpopup.component';
import { Bill } from 'src/app/interfaces/bill';
import { Subscription } from 'rxjs';
import { BillService } from 'src/app/services/bill/bill.service';
import { DatePipe } from '@angular/common';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-managebill',
  templateUrl: './managebill.component.html',
  styleUrls: ['./managebill.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class ManagebillComponent implements OnInit {
  billList: Bill[] = [];
  private subscription: Subscription = new Subscription();

  currentPage = 1;
  itemsPerPage = 100;
  totalItems = 0;
  searchTerm = '';

  //checkbox start
  task: Task = {
    name: '',
    completed: false,
    color: 'primary',
  };
  isComplete: boolean = false;
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

  constructor(private billService: BillService, private datePipe: DatePipe, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBills();
    this.subscription.add(
      this.billService.onBillUpdated().subscribe(() => {
        console.log('Bill update notification received, reloading bills');
        this.loadBills();
      })
    );
  }


  loadBills() { 
  this.billService.getBills(this.currentPage, this.itemsPerPage, this.searchTerm).subscribe({
      next: (response : any) => {
        this.billList = response.data;
        console.log("la list des factures est : ", this.billList);
        this.totalItems = response.pagination.total;

      },
      error: (error: any) => {
        console.error("Error fetching bills:", error);
        this.billList = [];
      }
    });
  }

 


  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }

  onDelete(id : string) {
    this.billService.deleteBill(id).subscribe({
          next: (response : any) => {
            this.loadBills();
            console.log("La factures à était supprimer avec ID : ", id);
            },
            error: (error: any) => {
              console.error(error);
              }
        })
  }


    editBill(bill: Bill) {
        const dialogRef = this.dialog.open(AddpaymentpopupComponent, {
            data: { bill: { ...bill } } // Pass a copy of the bill to avoid direct modification
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.billService.updateBill(bill._id!, result).subscribe({
                    next: (response: { success: boolean; data?: Bill; error?: string }) => {
                        if (response.success) {
                            this.billService.notifyBillUpdated();
                            console.log('Bill updated successfully');
                        } else {
                            console.error('Failed to update bill:', response.error);
                        }
                    },
                    error: (error: any) => {
                        console.error('Error updating bill:', error);
                    }
                });
            }
        });
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
    this.oneComplete = completed;
    if (completed) {
      this.isComplete = completed;
    }
    if (!this.sixteenComplete && !this.fifteenComplete && !this.fourteenComplete && 
        !this.thirteenComplete && !this.twelveComplete && !this.elevenComplete && 
        !this.tenComplete && !this.nineComplete && !this.eightComplete && 
        !this.sevenComplete && !this.sixComplete && !this.fiveComplete && 
        !this.fourComplete && !this.threeComplete && !this.twoComplete && 
        !this.oneComplete) {
      this.isComplete = completed;
    }
  }

  addPaymentPopup() {
    this.dialog.open(AddpaymentpopupComponent);
  }

  sendPaymentPopup() {
    this.dialog.open(SendbillpopupComponent);
  }

  billDetailsPopup(bill: Bill) {
    this.dialog.open(BilldetailspopupComponent, {
      data: {
        bill_id: bill._id,
      },
    });
    console.log("Selected bill:", bill._id);
  }

  //sidebar menu activation
  menuSidebarActive: boolean = false;
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  //header activation
  menuShortcutActive: boolean = false;
  shortmenu() {
    this.menuShortcutActive = !this.menuShortcutActive;
    if (this.menuShortcutActive) {
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  notifyShortcutActive: boolean = false;
  notifydropdown() {
    this.notifyShortcutActive = !this.notifyShortcutActive;
    if (this.notifyShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  emailShortcutActive: boolean = false;
  emaildropdown() {
    this.emailShortcutActive = !this.emailShortcutActive;
    if (this.emailShortcutActive) {
      this.menuShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  langShortcutActive: boolean = false;
  langdropdown() {
    this.langShortcutActive = !this.langShortcutActive;
    if (this.langShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  proShortcutActive: boolean = false;
  prodropdown() {
    this.proShortcutActive = !this.proShortcutActive;
    if (this.proShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
    }
  }
}
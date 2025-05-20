import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddpaymentpopupComponent } from '../addpaymentpopup/addpaymentpopup.component';
import { SendbillpopupComponent } from '../sendbillpopup/sendbillpopup.component';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill/bill.service';

@Component({
  selector: 'app-billdetailspopup',
  templateUrl: './billdetailspopup.component.html',
  styleUrls: ['./billdetailspopup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BilldetailspopupComponent implements OnInit {

  bill_id: string= '';
  bill : Bill = { _id: '', fournisseur: '', type: 'invoice', dateFacturation: '05/20/2025', status: 'en attente', lignes : [], totalHT : 0, tvaRate: 0, totalTTC: 0, numero: ''};

  constructor(private billService: BillService, public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: { bill_id: string })
     {
      this.bill_id = data.bill_id;
      console.log("bill ID recieved from the other componant", this.bill_id);

    }

     ngOnInit(): void {
      this.loadBill()
  }

  loadBill() { 
  this.billService.getBillById(this.bill_id).subscribe({
      next: (response : { success: boolean; data?: Bill; error?: string }) => {
        if (response.success && response.data) {
          this.bill = response.data;
          console.log("la list des factures est : ", this.bill);
        }
        else {
          console.error("Failed to load bill:", response.error);
        }
        },
        error: (error: any) => {
          console.error(error);
          }
    })
  }

  addPaymentPopup() {
    this.dialog.open(AddpaymentpopupComponent);
  }
  sendPaymentPopup() {
    this.dialog.open(SendbillpopupComponent);
  }

 

}

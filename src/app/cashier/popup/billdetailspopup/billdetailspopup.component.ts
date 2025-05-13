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
  bill : Bill = { _id: '', clientName: '', type: '', dateFacture: '', status: '', dateFacturation: '' , lignes : [], total : 0, tvaRate: 0};

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
      next: (response : Bill) => {
        this.bill = response;
        console.log("la list des factures est : ", this.bill);
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

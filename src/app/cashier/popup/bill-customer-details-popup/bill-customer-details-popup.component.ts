import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BillCustomerService } from 'src/app/services/bill-customer/bill-customer.service';
import { AddpaymentpopupComponent } from '../addpaymentpopup/addpaymentpopup.component';
import { SendbillpopupComponent } from '../sendbillpopup/sendbillpopup.component';

@Component({
  selector: 'app-bill-customer-details-popup',
  templateUrl: './bill-customer-details-popup.component.html',
  styleUrl: './bill-customer-details-popup.component.scss',
    encapsulation: ViewEncapsulation.None
  
})
export class BillCustomerDetailsPopupComponent {

  bill_id: string= '';
  bill : any = { _id: '', client: '', type: 'invoice', dateFacturation: '05/20/2025', status: 'en attente', lignes : [], totalHT : 0, tvaRate: 0, totalTTC: 0, numero: ''};
  
    constructor(private billCustomerService: BillCustomerService, public dialog: MatDialog, 
      @Inject(MAT_DIALOG_DATA) public data: { bill_id: string })
       {
        this.bill_id = data.bill_id;
        console.log("bill Customer ID recieved from the other componant", this.bill_id);
  
      }
  
    ngOnInit(): void {
        console.log("l'initialisation de composant fonctionne correctement ! ");
  
        this.loadBill();
    }
  
    loadBill() { 
    this.billCustomerService.getBillById(this.bill_id).subscribe({
        next: (response) => {
            this.bill = response.data;
            console.log("la  facture Client  est : ", this.bill);
          
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

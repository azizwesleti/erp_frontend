import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/interfaces/bill';
import { Customer } from 'src/app/interfaces/customer';
import { BillService } from 'src/app/services/bill/bill.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-createpaymentinvoice',
  templateUrl: './createpaymentinvoice.component.html',
  styleUrls: ['./createpaymentinvoice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatepaymentinvoiceComponent implements OnInit {

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
  clients: Customer[] = [];
  bills: Bill[] = [];

paiement: any = {
  client: null,
  facture: null,
  montant: 0,
  datePaiement: '',
  moyen: '',
  statut: 'réussi'
};
resetForm(): void {
    this.paiement = {
      client: null,
      facture: null,
      montant: 0,
      datePaiement: '',
      moyen: '',
      statut: 'réussi'
    };
  }
  constructor(private customerService: CustomerService, private billService:BillService, private paiementService: PaymentService  ,  private router: Router ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.clients = data;
        console.log('Clients loaded:', this.clients);
      },
      error: (err) => {
        console.error('Error fetching customers', err);
      }
    });

this.billService.getBills().subscribe({
      next: (data) => {
        this.bills = data.data;
        console.log('bills loaded:', this.bills);
      },
      error: (err) => {
        console.error('Error fetching bills', err);
      }
    });
  }

onSubmit(): void {
  if (this.paiement.invalid) {
    console.log('Form invalid');
    return;
  }
  
    console.log("111"+this.paiement)

  const paiementData = this.paiement;

    console.log(this.paiement)
 this.paiementService.addPayment(paiementData).subscribe({
  next: (res) => {
    console.log('Paiement created:', res);
    
    // Check if payment status is 'réussi'
    if (paiementData.statut === 'réussi') {
      this.router.navigate(['/payment/paymentlistinvoice']);
    }
  },
  error: (err) => {
    console.error('Failed to create paiement:', err.error || err.message);
  }
});
}

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BanklistComponent } from './cashier/bank/banklist/banklist.component';
import { CreatebankComponent } from './cashier/bank/createbank/createbank.component';

import { AddbillComponent } from './cashier/bill/addbill/addbill.component';
import { CustomeraddbillComponent } from './cashier/bill/customeraddbill/customeraddbill.component';
import { CustomermanagebillComponent } from './cashier/bill/customermanagebill/customermanagebill.component';
import { ManagebillComponent } from './cashier/bill/managebill/managebill.component';

import { ForgotpasswordComponent } from './cashier/common/forgotpassword/forgotpassword.component';
import { LoginComponent } from './cashier/common/login/login.component';
import { ProfileComponent } from './cashier/common/profile/profile.component';
import { RegisterComponent } from './cashier/common/register/register.component';
import { DashboardComponent } from './cashier/dashboard/dashboard/dashboard.component';
import { CreateledgerComponent } from './cashier/ledger/createledger/createledger.component';
import { LedgergroupComponent } from './cashier/ledger/ledgergroup/ledgergroup.component';
import { LedgerlistComponent } from './cashier/ledger/ledgerlist/ledgerlist.component';
import { CreatepaymentComponent } from './cashier/payment/createpayment/createpayment.component';
import { CreatepaymentinvoiceComponent } from './cashier/payment/createpaymentinvoice/createpaymentinvoice.component';
import { PaymentlistComponent } from './cashier/payment/paymentlist/paymentlist.component';
import { PaymentlistinvoiceComponent } from './cashier/payment/paymentlistinvoice/paymentlistinvoice.component';
import { CustomerComponent } from './cashier/people/customer/customer.component';
import { SupplierComponent } from './cashier/people/supplier/supplier.component';
import { CompanyoverviewpopupComponent } from './cashier/popup/companyoverviewpopup/companyoverviewpopup.component';
import { AccountsbalanceComponent } from './cashier/reports/accountsbalance/accountsbalance.component';
import { BalancesheetComponent } from './cashier/reports/balancesheet/balancesheet.component';
import { ExpensereportComponent } from './cashier/reports/expensereport/expensereport.component';
import { IncomereportComponent } from './cashier/reports/incomereport/incomereport.component';
import { NetincomereportComponent } from './cashier/reports/netincomereport/netincomereport.component';
import { ProfitreportComponent } from './cashier/reports/profitreport/profitreport.component';
import { TransectionComponent } from './cashier/reports/transection/transection.component';
import { TrialbalanceComponent } from './cashier/reports/trialbalance/trialbalance.component';
import { AdduserComponent } from './cashier/usermanagement/adduser/adduser.component';
import { UserlistComponent } from './cashier/usermanagement/userlist/userlist.component';
import { UserroleComponent } from './cashier/usermanagement/userrole/userrole.component';
import { CreatejournalComponent } from './cashier/voucher/createjournal/createjournal.component';
import { CreditlistComponent } from './cashier/voucher/creditlist/creditlist.component';
import { CreditvoucherComponent } from './cashier/voucher/creditvoucher/creditvoucher.component';
import { DebitlistComponent } from './cashier/voucher/debitlist/debitlist.component';
import { DebitvoucherComponent } from './cashier/voucher/debitvoucher/debitvoucher.component';
import { JournallistComponent } from './cashier/voucher/journallist/journallist.component';
import { EditCustomerComponent } from './cashier/people/customer/components/edit-customer/edit-customer.component';
import { ArticleComponent } from './cashier/Article/article/article.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bank/createbank', component: CreatebankComponent },
  { path: 'bank/banklist', component: BanklistComponent },

  { path: 'payment/createpayment', component: CreatepaymentComponent },
  { path: 'payment/createpaymentinvoice', component: CreatepaymentinvoiceComponent },
  { path: 'payment/paymentlist', component: PaymentlistComponent },
  { path: 'payment/paymentlistinvoice', component: PaymentlistinvoiceComponent },

  { path: 'voucher/createdebitvoucher', component: DebitvoucherComponent },
  { path: 'voucher/debitlist', component: DebitlistComponent },
  { path: 'voucher/createcreditvoucher', component: CreditvoucherComponent },
  { path: 'voucher/creditlist', component: CreditlistComponent },
  { path: 'voucher/createjournal', component: CreatejournalComponent },
  { path: 'voucher/journallist', component: JournallistComponent },

  { path: 'ledger/createledger', component: CreateledgerComponent },
  { path: 'ledger/ledgerlist', component: LedgerlistComponent },
  { path: 'ledger/ledgergroup', component: LedgergroupComponent },

  { path: 'bill/addbill', component: AddbillComponent },
  { path: 'bill/managebill', component: ManagebillComponent },
  { path: 'bill/customerbill', component: CustomeraddbillComponent },
  { path: 'bill/customermanagebill', component: CustomermanagebillComponent },



  { path: 'people/supplier', component: SupplierComponent },
  { path: 'people/customer', component: CustomerComponent },



  { path: 'user/adduser', component: AdduserComponent },
  { path: 'user/userlist', component: UserlistComponent },
  { path: 'user/userrole', component: UserroleComponent },

  { path: 'report/transection', component: TransectionComponent },
  { path: 'report/accountsbalance', component: AccountsbalanceComponent },
  { path: 'report/trialbalance', component: TrialbalanceComponent },
  { path: 'report/incomereport', component: IncomereportComponent },
  { path: 'report/expensereport', component: ExpensereportComponent },
  { path: 'report/profitreport', component: ProfitreportComponent },
  { path: 'report/netincomereport', component: NetincomereportComponent },
  { path: 'report/balancesheet', component: BalancesheetComponent },

  { path: 'companyoverviewpopup', component: CompanyoverviewpopupComponent },
  
  
  { path: 'profile', component: ProfileComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'article', component: ArticleComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ClipboardModule } from 'ngx-clipboard';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser'; // Remove this import

import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { QuickviewComponent } from './dashboard/quickview/quickview.component';
import { UserComponent } from './dashboard/user/user.component';
import { RecentvoucherComponent } from './dashboard/recentvoucher/recentvoucher.component';
import { RecentclientsComponent } from './dashboard/recentclients/recentclients.component';
import { CopyrightComponent } from './dashboard/copyright/copyright.component';
import { ProfileComponent } from './common/profile/profile.component';
import { BalancealertComponent } from './dashboard/balancealert/balancealert.component';
import { SplinechartComponent } from './dashboard/charts/splinechart/splinechart.component';
import { BarchartComponent } from './dashboard/charts/barchart/barchart.component';
import { PiechartComponent } from './dashboard/charts/piechart/piechart.component';
import { CreatebankComponent } from './bank/createbank/createbank.component';

import { CreatepaymentComponent } from './payment/createpayment/createpayment.component';
import { CreatepaymentinvoiceComponent } from './payment/createpaymentinvoice/createpaymentinvoice.component';
import { CreateledgerComponent } from './ledger/createledger/createledger.component';
import { BanklistComponent } from './bank/banklist/banklist.component';
import { PaymentlistComponent } from './payment/paymentlist/paymentlist.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { LedgerlistComponent } from './ledger/ledgerlist/ledgerlist.component';
import { PaymentlistinvoiceComponent } from './payment/paymentlistinvoice/paymentlistinvoice.component';
import { LedgergroupComponent } from './ledger/ledgergroup/ledgergroup.component';
import { DebitlistComponent } from './voucher/debitlist/debitlist.component';
import { CreditlistComponent } from './voucher/creditlist/creditlist.component';
import { PaymentviewpopupComponent } from './popup/paymentviewpopup/paymentviewpopup.component';
import { PaymentinvoicepopupComponent } from './popup/paymentinvoicepopup/paymentinvoicepopup.component';
import { DebitvoucherComponent } from './voucher/debitvoucher/debitvoucher.component';
import { CreditvoucherComponent } from './voucher/creditvoucher/creditvoucher.component';
import { DebitvoucherpopupComponent } from './popup/debitvoucherpopup/debitvoucherpopup.component';
import { CreditvoucherpopupComponent } from './popup/creditvoucherpopup/creditvoucherpopup.component';
import { CreatejournalComponent } from './voucher/createjournal/createjournal.component';
import { JournallistComponent } from './voucher/journallist/journallist.component';
import { JournalpopupComponent } from './popup/journalpopup/journalpopup.component';
import { AddcompanypopupComponent } from './popup/addcompanypopup/addcompanypopup.component';
import { CompanyoverviewpopupComponent } from './popup/companyoverviewpopup/companyoverviewpopup.component';
import { SupplierComponent } from './people/supplier/supplier.component';
import { AddsupplierpopupComponent } from './popup/addsupplierpopup/addsupplierpopup.component';
import { AddbillerpopupComponent } from './popup/addbillerpopup/addbillerpopup.component';
import { AddvendorpopupComponent } from './popup/addvendorpopup/addvendorpopup.component';
import { CustomerComponent } from './people/customer/customer.component';
import { AddcustomerpopupComponent } from './popup/addcustomerpopup/addcustomerpopup.component';
import { AdduserComponent } from './usermanagement/adduser/adduser.component';
import { UserlistComponent } from './usermanagement/userlist/userlist.component';
import { UserroleComponent } from './usermanagement/userrole/userrole.component';
import { ManagebillComponent } from './bill/managebill/managebill.component';
import { AddbillComponent } from './bill/addbill/addbill.component';
import { AddpaymentpopupComponent } from './popup/addpaymentpopup/addpaymentpopup.component';
import { SendbillpopupComponent } from './popup/sendbillpopup/sendbillpopup.component';
import { TransectionComponent } from './reports/transection/transection.component';
import { AccountsbalanceComponent } from './reports/accountsbalance/accountsbalance.component';
import { TrialbalanceComponent } from './reports/trialbalance/trialbalance.component';
import { IncomereportComponent } from './reports/incomereport/incomereport.component';
import { IncomechartsComponent } from './dashboard/charts/incomecharts/incomecharts.component';
import { ExpensereportComponent } from './reports/expensereport/expensereport.component';
import { ProfitreportComponent } from './reports/profitreport/profitreport.component';
import { NetincomereportComponent } from './reports/netincomereport/netincomereport.component';
import { BalancesheetComponent } from './reports/balancesheet/balancesheet.component';
import { BilldetailspopupComponent } from './popup/billdetailspopup/billdetailspopup.component';
import { BankrolepermissionComponent } from './setting/bankrolepermission/bankrolepermission.component';
import { PaymentrolepermissionComponent } from './setting/paymentrolepermission/paymentrolepermission.component';
import { VoucherrolepermissionComponent } from './setting/voucherrolepermission/voucherrolepermission.component';
import { LedgerrolepermissionComponent } from './setting/ledgerrolepermission/ledgerrolepermission.component';
import { CompanyrolepermissionComponent } from './setting/companyrolepermission/companyrolepermission.component';
import { PeoplerolepermissionComponent } from './setting/peoplerolepermission/peoplerolepermission.component';
import { ReportrolepermissionComponent } from './setting/reportrolepermission/reportrolepermission.component';
import { SettingrolepermissionComponent } from './setting/settingrolepermission/settingrolepermission.component';
import { DashboardiconComponent } from './dashboard/menuicon/dashboardicon/dashboardicon.component';
import { BankiconComponent } from './dashboard/menuicon/bankicon/bankicon.component';
import { PaymenticonComponent } from './dashboard/menuicon/paymenticon/paymenticon.component';
import { VouchericonComponent } from './dashboard/menuicon/vouchericon/vouchericon.component';
import { LedgericonComponent } from './dashboard/menuicon/ledgericon/ledgericon.component';
import { BilliconComponent } from './dashboard/menuicon/billicon/billicon.component';
import { CompanyiconComponent } from './dashboard/menuicon/companyicon/companyicon.component';
import { SmsiconComponent } from './dashboard/menuicon/smsicon/smsicon.component';
import { PeopleiconComponent } from './dashboard/menuicon/peopleicon/peopleicon.component';
import { ReporticonComponent } from './dashboard/menuicon/reporticon/reporticon.component';
import { ToolsiconComponent } from './dashboard/menuicon/toolsicon/toolsicon.component';
import { CustomeraddbillComponent } from './bill/customeraddbill/customeraddbill.component';
import { CustomermanagebillComponent } from './bill/customermanagebill/customermanagebill.component';
import { EditprofileiconComponent } from './dashboard/menuicon/editprofileicon/editprofileicon.component';
import { AppearenceiconComponent } from './dashboard/menuicon/appearenceicon/appearenceicon.component';
import { LanguageiconComponent } from './dashboard/menuicon/languageicon/languageicon.component';
import { LogouticonComponent } from './dashboard/menuicon/logouticon/logouticon.component';
import { BariconComponent } from './dashboard/menuicon/baricon/baricon.component';
import { NotifyiconComponent } from './dashboard/menuicon/notifyicon/notifyicon.component';
import { EmailiconComponent } from './dashboard/menuicon/emailicon/emailicon.component';
import { SettingiconComponent } from './dashboard/menuicon/settingicon/settingicon.component';
import { NotifydropdownComponent } from './dashboard/dropdown/notifydropdown/notifydropdown.component';
import { EmaildropdownComponent } from './dashboard/dropdown/emaildropdown/emaildropdown.component';
import { QuickdropdownComponent } from './dashboard/dropdown/quickdropdown/quickdropdown.component';
import { LanguagedropdownComponent } from './dashboard/dropdown/languagedropdown/languagedropdown.component';
import { MessageComponent } from './common/message/message.component';
import { SentmessageComponent } from './common/sentmessage/sentmessage.component';
import { DraftmessageComponent } from './common/draftmessage/draftmessage.component';
import { ImportantmessageComponent } from './common/importantmessage/importantmessage.component';
import { TrashmessageComponent } from './common/trashmessage/trashmessage.component';
import { ReplyiconComponent } from './dashboard/menuicon/replyicon/replyicon.component';
import { ForwardiconComponent } from './dashboard/menuicon/forwardicon/forwardicon.component';
import { DeleteiconComponent } from './dashboard/menuicon/deleteicon/deleteicon.component';
import { LoginComponent } from './common/login/login.component';
import { ForgotpasswordComponent } from './common/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './common/register/register.component';
import { DraftemailComponent } from './common/draftemail/draftemail.component';
import { ImportantemailComponent } from './common/importantemail/importantemail.component';
import { SentemailComponent } from './common/sentemail/sentemail.component';
import { TrashemailComponent } from './common/trashemail/trashemail.component';
import { InboxemailComponent } from './common/inboxemail/inboxemail.component';
import { SublevelMenuComponent } from './dashboard/menu/sublevel-menu.component';
import { CalenderComponent } from './dashboard/calender/calender.component';
import { HttpClientModule } from '@angular/common/http';
import { EditSupplierComponent } from './people/supplier/componoents/edit-supplier/edit-supplier.component';
import { DeleteSupplierComponent } from './people/supplier/componoents/delete-supplier/delete-supplier.component';
import { EditCustomerComponent } from './people/customer/components/edit-customer/edit-customer.component';


import { ArticleComponent } from './Article/article/article.component';
import { AddArticleComponent } from './Article/article/C/add-articledd-article/add-articledd-article.component';
import { EditArticleComponent } from './Article/article/C/edit-article/edit-article.component';
import { ConfirmSubmitPopupComponent } from './ledger/confirm-submit-popup/confirm-submit-popup.component';
import { UserCreatedComponent } from './usermanagement/user-created/user-created.component';
import { BillCustomerDetailsPopupComponent } from './popup/bill-customer-details-popup/bill-customer-details-popup.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    MatSliderModule,
    RouterModule,
    FormsModule,
    ClipboardModule,
    MatIconModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    BrowserModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    QuickviewComponent,
    UserComponent,
    RecentvoucherComponent,
    RecentclientsComponent,
    CopyrightComponent,
    ProfileComponent,
    BalancealertComponent,
    SplinechartComponent,
    BarchartComponent,
    PiechartComponent,
    CreatebankComponent,

    CreatepaymentComponent,
    CreatepaymentinvoiceComponent,
    CreateledgerComponent,
    BanklistComponent,
    PaymentlistComponent,
    PaginationComponent,
    LedgerlistComponent,
    PaymentlistinvoiceComponent,

    LedgergroupComponent,
    DebitlistComponent,
    CreditlistComponent,
    PaymentviewpopupComponent,
    PaymentinvoicepopupComponent,
    DebitvoucherComponent,
    CreditvoucherComponent,
    DebitvoucherpopupComponent,
    CreditvoucherpopupComponent,
    CreatejournalComponent,
    JournallistComponent,
    JournalpopupComponent,
    AddcompanypopupComponent,
    CompanyoverviewpopupComponent,
    SupplierComponent,
    AddsupplierpopupComponent,
    AddbillerpopupComponent,
    AddvendorpopupComponent,
    CustomerComponent,
    AddcustomerpopupComponent,
    AdduserComponent,
    UserlistComponent,
    UserroleComponent,
    ManagebillComponent,
    AddbillComponent,
    AddpaymentpopupComponent,
    SendbillpopupComponent,
    TransectionComponent,
    AccountsbalanceComponent,
    TrialbalanceComponent,
    IncomereportComponent,
    IncomechartsComponent,
    ExpensereportComponent,
    ProfitreportComponent,
    NetincomereportComponent,
    BalancesheetComponent,
    BilldetailspopupComponent,
    BankrolepermissionComponent,
    PaymentrolepermissionComponent,
    VoucherrolepermissionComponent,
    LedgerrolepermissionComponent,
    CompanyrolepermissionComponent,
    PeoplerolepermissionComponent,
    ReportrolepermissionComponent,
    SettingrolepermissionComponent,
    DashboardiconComponent,
    BankiconComponent,
    PaymenticonComponent,
    VouchericonComponent,
    LedgericonComponent,
    BilliconComponent,
    CompanyiconComponent,
    SmsiconComponent,
    PeopleiconComponent,
    ReporticonComponent,
    ToolsiconComponent,
    CustomeraddbillComponent,
    CustomermanagebillComponent,
    EditprofileiconComponent,
    AppearenceiconComponent,
    LanguageiconComponent,
    LogouticonComponent,
    BariconComponent,
    NotifyiconComponent,
    EmailiconComponent,
    SettingiconComponent,
    NotifydropdownComponent,
    EmaildropdownComponent,
    QuickdropdownComponent,
    LanguagedropdownComponent,

    MessageComponent,
    SentmessageComponent,
    DraftmessageComponent,
    ImportantmessageComponent,
    TrashmessageComponent,
    ReplyiconComponent,
    ForwardiconComponent,
    DeleteiconComponent,

    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    DraftemailComponent,
    ImportantemailComponent,
    SentemailComponent,
    TrashemailComponent,
    InboxemailComponent,
    SublevelMenuComponent,
    CalenderComponent,
    EditSupplierComponent,
    DeleteSupplierComponent,
    EditCustomerComponent,
    ArticleComponent,
    AddArticleComponent,
    EditArticleComponent,
    ConfirmSubmitPopupComponent,
    UserCreatedComponent,
    BillCustomerDetailsPopupComponent

  ],

})
export class CashierModule { }

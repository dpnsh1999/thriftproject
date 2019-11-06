import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { PartnerShipComponent } from './partner-ship/partner-ship.component';
import { FormsLayoutComponent } from './forms-layout/forms-layout.component';
import { ShareFormsComponent } from './share-forms/share-forms.component';
import { ThriftDepositComponent } from './thrift-deposit/thrift-deposit.component';
import { RecurringFormsComponent } from './recurring-forms/recurring-forms.component';
import { FDFormsComponent } from './fd-forms/fd-forms.component';
import { FdDetailsComponent } from './fd-details/fd-details.component';
import { FdRequestFormsComponent } from './fd-request-forms/fd-request-forms.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LsfDetailsComponent } from './lsf-details/lsf-details.component';
import { LoanBalanceComponent } from './loan-balance/loan-balance.component';
import { GrossaryLoanComponent } from './grossary-loan/grossary-loan.component';
import { LoanDepositComponent } from './loan-deposit/loan-deposit.component';
import { RdApplicationComponent } from './rd-application/rd-application.component';
import { RDDetailsComponent } from './rd-details/rd-details.component';
import { RdTransactionComponent } from './rd-transaction/rd-transaction.component';
import { RdRequestComponent } from './rd-request/rd-request.component';
import { ShareCertificateComponent } from './share-certificate/share-certificate.component';
import { PassbookDetailsComponent } from './passbook-details/passbook-details.component';
import { VoucherDetailsComponent } from './voucher-details/voucher-details.component';
import { ChequeTransactionsComponent } from './cheque-transactions/cheque-transactions.component';
import { LoanRequestFormComponent } from './loan-request-form/loan-request-form.component';
import { MrnDetailsComponent } from './mrn-details/mrn-details.component';
import { AllChequeListComponent } from './all-cheque-list/all-cheque-list.component';



const routes: Routes =[
    {
      path: '',
      component: FormsComponent,
      children: [
          {
             path: 'inputs',
             component: FormInputsComponent, 
          },
          {
            path: 'membership',
            component: MemberShipComponent, 
         },
         {
            path: 'shareforms',
            component: ShareFormsComponent, 
         },
         {
            path: 'thriftdeposite',
            component: ThriftDepositComponent, 
         },
         {
            path: 'recurringforms',
            component: RecurringFormsComponent, 
         },
         {
            path: 'fdforms',
            component: FDFormsComponent, 
         },
         {
            path: 'fddetails',
            component: FdDetailsComponent, 
         },
         {
            path: 'fdrequestforms',
            component: FdRequestFormsComponent, 
         },
         {
            path: 'loanapplicationform',
            component: LoanApplicationFormComponent,
         },
         {
            path: 'loandetails',
            component: LoanDetailsComponent,
         }, 
         {
            path: 'lsfdetails',
            component: LsfDetailsComponent,
         },
         {
            path: 'loanbalance',
            component: LoanBalanceComponent,
         },   
         {
            path: 'grossaryloan',
            component: GrossaryLoanComponent,
         },
         {
            path: 'loandeposit',
            component: LoanDepositComponent,
         },
         {
            path: 'rdapplication',
            component: RdApplicationComponent,
         },
         {
            path: 'rddetails',
            component: RDDetailsComponent,
         },
         {
            path: 'rdtransaction',
            component: RdTransactionComponent,
         },
         {
            path: 'rdrequest',
            component: RdRequestComponent,
         }, 
         {
            path: 'sharecertificate',
            component: ShareCertificateComponent,
         },  
         {
            path: 'passbookdetails',
            component: PassbookDetailsComponent,
         }, 
         {
            path: 'voucherdetails',
            component: VoucherDetailsComponent,
         }, 
         {
            path: 'chequetransactions',
            component: ChequeTransactionsComponent,
         },
         {
            path: 'allchequelist',
            component: AllChequeListComponent,
         },
         {
            path: 'loanrequestform',
            component: LoanRequestFormComponent,
         },
         {
            path: 'mrndetails',
            component: MrnDetailsComponent,
         },
         {
            path: 'partnership',
            component: PartnerShipComponent, 
         },
         {
            path: 'formsLayout',
            component:FormsLayoutComponent, 
         },
      ], 
    },
];



@NgModule ({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule,
    ]
})

export class FormsRoutingModule {

}




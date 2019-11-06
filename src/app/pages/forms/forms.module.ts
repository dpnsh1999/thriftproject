import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbCardModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
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
import { ReactiveFormsModule } from '@angular/forms';



@NgModule ({
     imports:[
        NbActionsModule,
        NbCardModule,
        NbDatepickerModule,
        NbButtonModule,
        NbInputModule,
        NbIconModule,
        NbCheckboxModule,
        NbRadioModule,
        NbSelectModule,
        NbUserModule,
        ThemeModule,
        FormsRoutingModule,
        ReactiveFormsModule
     ],
    declarations: [
        FormsComponent,
        FormInputsComponent,
        MemberShipComponent,
        PartnerShipComponent,
        FormsLayoutComponent,
        ShareFormsComponent,
        ThriftDepositComponent,
        RecurringFormsComponent,
        FDFormsComponent,
        FdDetailsComponent,
        FdRequestFormsComponent,
        LoanApplicationFormComponent,
        LoanDetailsComponent,
        LsfDetailsComponent,
        LoanBalanceComponent,
        GrossaryLoanComponent,
        LoanDepositComponent,
        RdApplicationComponent,
        RDDetailsComponent,
        RdTransactionComponent,
        RdRequestComponent,
        ShareCertificateComponent,
        PassbookDetailsComponent,
        VoucherDetailsComponent,
        ChequeTransactionsComponent,
        LoanRequestFormComponent,
        MrnDetailsComponent,
        AllChequeListComponent,        
        
    ],
})

export class FormsModule {

}
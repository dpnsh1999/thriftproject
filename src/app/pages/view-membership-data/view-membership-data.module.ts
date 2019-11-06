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
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { ViewMembershipDataRoutingModule } from './view-membership-data-routing.module';
import { ViewMembershipDataComponent } from './view-membership-data.component';
import { CurrentPositionOfMemberComponent } from './current-position-of-member/current-position-of-member.component';
import { LoanVerificationComponent } from './loan-verification/loan-verification.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { BalanceComponent } from './balance/balance.component';
import { ShareDetailsComponent } from './share-details/share-details.component';
import { ThriftCreditDetailsComponent } from './thrift-credit-details/thrift-credit-details.component';
import { FdDetailsComponent } from './fd-details/fd-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanCreditWithdrawalComponent } from './loan-credit-withdrawal/loan-credit-withdrawal.component';
import { RdDetailsComponent } from './rd-details/rd-details.component';
import { RdCreditWithdrawalComponent } from './rd-credit-withdrawal/rd-credit-withdrawal.component';
import { FinalPaymentDetailsComponent } from './final-payment-details/final-payment-details.component';
import { YearlyDetailsComponent } from './yearly-details/yearly-details.component';
import { CurrentPositionComponent } from './current-position/current-position.component';
import { GuarantorRecoveryComponent } from './guarantor-recovery/guarantor-recovery.component';
import { MrnComponent } from './mrn/mrn.component';


@NgModule({
  declarations: [
    
    CurrentPositionOfMemberComponent,
    ViewMembershipDataComponent,
    LoanVerificationComponent,
    PersonalDetailComponent,
    BalanceComponent,
    ShareDetailsComponent,
    ThriftCreditDetailsComponent,
    FdDetailsComponent,
    LoanDetailsComponent,
    LoanCreditWithdrawalComponent,
    RdDetailsComponent,
    RdCreditWithdrawalComponent,
    FinalPaymentDetailsComponent,
    YearlyDetailsComponent,
    CurrentPositionComponent,
    GuarantorRecoveryComponent,
    MrnComponent,

],
  imports: [
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
    ViewMembershipDataRoutingModule,
    ReactiveFormsModule
  ]
})
export class ViewMembershipDataModule { }

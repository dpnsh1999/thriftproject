import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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





const routes: Routes = [
    {
        path: '',
        component: ViewMembershipDataComponent,
        children: [
          {
            path: 'currentpositionofmember',
            component: CurrentPositionOfMemberComponent, 
          },
          {
            path: 'loanverification',
            component: LoanVerificationComponent, 
          },
          {
            path: 'personaldetail',
            component: PersonalDetailComponent, 
          },
          {
            path: 'balance',
            component: BalanceComponent, 
          },
          {
            path: 'sharedetails',
            component: ShareDetailsComponent, 
          },
          {
            path: 'thriftcreditdetails',
            component: ThriftCreditDetailsComponent, 
          },
          {
            path: 'fddetails',
            component: FdDetailsComponent, 
          },
          {
            path: 'loandetails',
            component: LoanDetailsComponent, 
          },
          {
            path: 'loancreditwithdrawal',
            component: LoanCreditWithdrawalComponent, 
          },
          {
            path: 'rddetails',
            component: RdDetailsComponent, 
          },
          {
            path: 'rdcreditwithdrawal',
            component: RdCreditWithdrawalComponent, 
          },
          {
            path: 'finalpaymentdetails',
            component: FinalPaymentDetailsComponent, 
          },
          {
            path: 'yearlydetails',
            component: YearlyDetailsComponent, 
          },
          {
            path: 'currentposition',
            component: CurrentPositionComponent, 
          },
          {
            path: 'guarantorrecovery',
            component: GuarantorRecoveryComponent, 
          },
          {
            path: 'mrn',
            component: MrnComponent, 
          },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ViewMembershipDataRoutingModule { }
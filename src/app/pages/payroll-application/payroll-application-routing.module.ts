import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollApplicationComponent } from './payroll-application.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PayrollAdviceComponent } from './payroll-advice/payroll-advice.component';
import { PayrollDeductionComponent } from './payroll-deduction/payroll-deduction.component';
import { ExcessDetailsComponent } from './excess-details/excess-details.component';
import { ThriftDetailsComponent } from './thrift-details/thrift-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanCreditWithdrawalComponent } from './loan-credit-withdrawal/loan-credit-withdrawal.component';
import { RdDetailsComponent } from './rd-details/rd-details.component';
import { RdCreditWithdrawalComponent } from './rd-credit-withdrawal/rd-credit-withdrawal.component';
import { CurrentPositionOfLoanComponent } from './current-position-of-loan/current-position-of-loan.component';
import { GrossaryLoanComponent } from './grossary-loan/grossary-loan.component';




const routes: Routes = [
    {
        path: '',
        component: PayrollApplicationComponent,
        children: [
            {
             path: 'personaldetails',
             component: PersonalDetailsComponent, 
            },
            {
             path: 'payrolladvice',
             component: PayrollAdviceComponent, 
            },
            {
             path: 'payrolldeduction',
             component: PayrollDeductionComponent, 
            },
            {
             path: 'excessdetails',
             component: ExcessDetailsComponent, 
            },
            {
             path: 'thriftdetails',
             component: ThriftDetailsComponent, 
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
             path: 'currentpositionofloan',
             component: CurrentPositionOfLoanComponent, 
            },
            {
             path: 'grossaryloan',
             component: GrossaryLoanComponent, 
            },
         
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollApplicationRoutingModule { }
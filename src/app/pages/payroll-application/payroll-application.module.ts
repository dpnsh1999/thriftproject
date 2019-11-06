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
import { PayrollApplicationRoutingModule } from './payroll-application-routing.module';
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


@NgModule({
  declarations: [ 
    PayrollApplicationComponent,
    PersonalDetailsComponent,
    PayrollAdviceComponent,
    PayrollDeductionComponent,
    ExcessDetailsComponent,
    ThriftDetailsComponent,
    LoanDetailsComponent,
    LoanCreditWithdrawalComponent,
    RdDetailsComponent,
    RdCreditWithdrawalComponent,
    CurrentPositionOfLoanComponent,
    GrossaryLoanComponent
    
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
   PayrollApplicationRoutingModule,
   ReactiveFormsModule
  ]
})
export class PayrollApplicationModule { }

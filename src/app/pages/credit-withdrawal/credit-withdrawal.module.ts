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
import { CreditWithdrawalRoutingModule } from './credit-withdrawal-routing.module';
import { CreditWithdrawalComponent } from './credit-withdrawal.component';
import { ThriftCreditDetailsComponent } from './thrift-credit-details/thrift-credit-details.component';
import { RdCreditWithdrawalComponent } from './rd-credit-withdrawal/rd-credit-withdrawal.component';
import { LoanCreditComponent } from './loan-credit/loan-credit.component';


@NgModule({
  declarations: [
    ThriftCreditDetailsComponent,
    CreditWithdrawalComponent,
    RdCreditWithdrawalComponent,
    LoanCreditComponent
  
  
  
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
    CreditWithdrawalRoutingModule,
    ReactiveFormsModule
    
    

    
  ]
})
export class CreditWithdrawalModule { }

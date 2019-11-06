import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditWithdrawalComponent } from './credit-withdrawal.component';
import { ThriftCreditDetailsComponent } from './thrift-credit-details/thrift-credit-details.component';
import { RdCreditWithdrawalComponent } from './rd-credit-withdrawal/rd-credit-withdrawal.component';
import { LoanCreditComponent } from './loan-credit/loan-credit.component';


const routes: Routes = [
    {
        path: '',
        component: CreditWithdrawalComponent,
        children: [
          {
            path: 'thriftcreditdetails',
            component: ThriftCreditDetailsComponent, 
          },
          {
            path: 'rdcreditwithdrawal',
            component: RdCreditWithdrawalComponent, 
          },
          {
            path: 'loancredit',
            component: LoanCreditComponent, 
          },
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditWithdrawalRoutingModule { }
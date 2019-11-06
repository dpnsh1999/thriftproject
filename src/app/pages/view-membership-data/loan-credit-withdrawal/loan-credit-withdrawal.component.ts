import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-loan-credit-withdrawal',
  templateUrl: './loan-credit-withdrawal.component.html',
  styleUrls: ['./loan-credit-withdrawal.component.scss']
})
export class LoanCreditWithdrawalComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  loanCreditWithdrawal = this.fb.group ({
    id: [0],
    regNumber: [],
    date: [""],
    transactionType: [""],
    chequeNo: [],
    description: [""],
    depositeInAcc: [],
    mPayment: [],
    debitAmt: [],
    pAmtSettled: [],
    rmngPAmt: [],
    intAmtSettled: [],
    balanceInt: [],
    intDifference: [],
    refundAmt: [],
    refundType: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.loanCreditWithdrawal.value);

  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-credit-withdrawal',
  templateUrl: './loan-credit-withdrawal.component.html',
  styleUrls: ['./loan-credit-withdrawal.component.scss']
})
export class LoanCreditWithdrawalComponent {

  constructor(private fb: FormBuilder) { }

  loanCreditWithdrawal= this.fb.group ({

    id: ["0"],
    date: [""],
    chequeNumber: [],
    depositType: [""],
    account: [""],
    emiAmount: [],
    debitAmount: [],
    principleAmt: [],
    rmngBalance: [],
    intAmtSettled: [],
    balInterest: [],
    refundType: [""],
    refundDate: [""],
    refundAmt: [],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.loanCreditWithdrawal.value);

  }
}
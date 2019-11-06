import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-credit',
  templateUrl: './loan-credit.component.html',
  styleUrls: ['./loan-credit.component.scss']
})
export class LoanCreditComponent {

  constructor(private fb: FormBuilder) { }

  loanCredit= this.fb.group ({

    id: ["0"],
    personalId: [],
    loanId: [],
    depositId: [],
    depositDate: [""],
    depositType: [""],
    accountNumber: [],
    monthlyPayment: [],
    debitAmt: [],
    principleAmtSettled: [],
    intAmountSettled: [],
    rmngPrincipleAmt: [],
    refundType: [""],
    refundAmt: [],
    refundDate: [""],
  })

  onSubmit() {
    
    console.log(this.loanCredit.value);

  }
}

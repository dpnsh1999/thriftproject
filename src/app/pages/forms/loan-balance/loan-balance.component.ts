import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-balance',
  templateUrl: './loan-balance.component.html',
  styleUrls: ['./loan-balance.component.scss']
})
export class LoanBalanceComponent {

  constructor(private fb: FormBuilder) { }

  loanBalance= this.fb.group ({

    id: ["0"],
    regNumber: [],
    loanDate: [""],
    depositType: [""],
    emiAmount: [],
    debitAmt: [],
    principalAmount: [],
    interestAmount: [],
    remLoanamount: [],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.loanBalance.value);

  }
}

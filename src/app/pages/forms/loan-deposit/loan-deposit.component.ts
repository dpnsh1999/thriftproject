import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-deposit',
  templateUrl: './loan-deposit.component.html',
  styleUrls: ['./loan-deposit.component.scss']
})
export class LoanDepositComponent {

  constructor(private fb: FormBuilder) { }
 
  loanDeposit= this.fb.group ({
    id: ["0"],
    staffNo: [],
    depositDate: [""],
    memberName: [""],
    membershipDate: [""],
    rtDate: [""],
    loanBal: [],
    rmngInterest: [],
    total: [],

    listOfAllLoan: this.fb.group ({
      id: ["0"],
      loanType: [""],
      applyDate: [""],
      loanAmt: [],
      installment: [],
      maturityDate: [""],
      loanEmi: [],
      lastDepositDate: [""],
      loanBalance: [],
      rmngInterest: [],
      totalBal: [],
      deposit: [],
    })  
  })

  onSubmit() {
    
    console.log(this.loanDeposit.value);

  }
}

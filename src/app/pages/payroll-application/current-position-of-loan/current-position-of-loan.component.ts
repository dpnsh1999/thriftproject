import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-current-position-of-loan',
  templateUrl: './current-position-of-loan.component.html',
  styleUrls: ['./current-position-of-loan.component.scss']
})
export class CurrentPositionOfLoanComponent {

  constructor(private fb: FormBuilder) { }

  currentPositionOfLoan= this.fb.group ({

    id: ["0"],
    count: [""],
    loanType: [""],
    loanAmount: [],
    emergLoanAmount: [],
    totalEmi: [],
    emiPaidThisMonth: [],
    principleAmtPaidThisMonth: [],
    intAmtPaidThisMonth: [],
    rmngLoanAmount: [],
  })

  onSubmit() {
    
    console.log(this.currentPositionOfLoan.value);

  }
}

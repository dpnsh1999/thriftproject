import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-grossary-loan',
  templateUrl: './grossary-loan.component.html',
  styleUrls: ['./grossary-loan.component.scss']
})
export class GrossaryLoanComponent {

  constructor(private fb: FormBuilder) { }

  grossaryLoan= this.fb.group ({

    id: ["0"],
    grossaryLoanBkt: [""],
    loanDate: [""],
    loanAmount: [],
    installment: [""],
    emiAmount: [],
    creditAmount: [],
    depositDate: [""],
    debitDate: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.grossaryLoan.value);

  }
}

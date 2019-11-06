import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent {

  constructor(private fb: FormBuilder) { }

  loanDetails= this. fb. group ({

    id: ["0"],
    status: [""],
    loanAccountNumber: [],
    loanType: [""],
    staffNumber: [],
    memberName: [""],
    reqNumber: [],
    loanBalance: [],
    approved: [""],
    active: [""],
    comments: [""],
  })

  onSubmit() {
    
    console.log(this.loanDetails.value);

  }
}

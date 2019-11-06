import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-request-form',
  templateUrl: './loan-request-form.component.html',
  styleUrls: ['./loan-request-form.component.scss']
})
export class LoanRequestFormComponent {

  constructor(private fb: FormBuilder) { }

  loanRequestForms= this.fb.group({

    id: ["0"],
    formNumber: [],
    status: [""],
    staffNumber: [],
    memberName: [""],
    loanType: [""],
    loanAmount: [],
    applyDate: [""],
    suretyStaffNum1: [],
    suretyName1: [""],
    suretyStaffNum2: [],
    suretyName2: [""],
  })

  onSubmit() {
    
    console.log(this.loanRequestForms.value);

  }
}

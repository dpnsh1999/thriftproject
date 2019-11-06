import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.scss']
})
export class LoanApplicationFormComponent {

  constructor(private fb: FormBuilder) { }

  loanApplicationForm= this.fb.group ({

    id: ["0"],
    staffNumber: [],
    membershipNumber: [],
    membershipDate: [""],
    membershipStatus: [""],
    memberName: [""],
    gender: [""],
    dob: [""],
    phoneNumber: [],
  }) 

  onSubmit() {
    
    console.log(this.loanApplicationForm.value);

  }
}

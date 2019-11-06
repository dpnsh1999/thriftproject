import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-application',
  templateUrl: './rd-application.component.html',
  styleUrls: ['./rd-application.component.scss']
})
export class RdApplicationComponent {

  constructor(private fb: FormBuilder) { }

  rdApplicationForm= this.fb.group ({

    id: ["0"],
    typeOfReg: [""],
    membershipStatus: [""],
    membershipNumber: [],
    membershipDate: [""],
    staffNumber: [],
    memberName: [""],
    gender: [""],
    dob: [""],
    retirementDate: [""],
  })

  onSubmit() {
    
    console.log(this.rdApplicationForm.value);

  }
}

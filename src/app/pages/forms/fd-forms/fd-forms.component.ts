import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-fd-forms',
  templateUrl: './fd-forms.component.html',
  styleUrls: ['./fd-forms.component.scss']
})
export class FDFormsComponent  {

  constructor( private fb: FormBuilder) { }

  fdApplicationForm= this. fb. group ({

    membershipNumber:[],
    staffNumber:[],
    membershipStatus:[""],
    typeOfReg:[""],
    regNumber:[],
    firstName:[""],
    middleName:[""],
    lastName:[""],
    gender:[""],
    dob:[""],
    phoneNumber:[],
    currentAdd:[""],
  }) 

  onSubmit() {
    
    console.log(this.fdApplicationForm.value);

  }
}

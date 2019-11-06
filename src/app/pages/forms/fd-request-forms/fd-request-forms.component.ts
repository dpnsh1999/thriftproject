import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-fd-request-forms',
  templateUrl: './fd-request-forms.component.html',
  styleUrls: ['./fd-request-forms.component.scss']
})
export class FdRequestFormsComponent  {

  constructor(private fb: FormBuilder) { }

  fdRequestForm= this.fb.group ({
    id: ["0"],
    requestId:[""],
    requestDate:[""],
    staffNumber:[],
    memberNumber:[],
    name:[""],
    jointName:[""],
    nomineeName:[""],
    mobileNumber:[],
    panNumber:[""],
    address:[""],
    bankAccountNumber:[],
    fdAmount:[],
    period:[],
    fdInterest:[],
    maturityAmount:[],
    terms:[""],
    status:[""],
    active:[""],
  })

  onSubmit() {
    
    console.log(this.fdRequestForm.value);

  }
}

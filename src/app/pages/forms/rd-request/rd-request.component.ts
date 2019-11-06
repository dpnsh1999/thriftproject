import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-request',
  templateUrl: './rd-request.component.html',
  styleUrls: ['./rd-request.component.scss']
})
export class RdRequestComponent {

  constructor(private fb: FormBuilder) { }

  onlineRdRequest= this.fb.group ({
    id: ["0"],
    requestDate: [""],
    requestId: [""],
    staffNumber: [],
    memberNumber: [""],
    name: [""],
    mobileNumber: [],
    address: [""],
    nominee: [""],
    rdAmount: [],
    period: [],
    rdInterest: [],
    maturityAmt: [],
    tAndC: [""],
    status: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.onlineRdRequest.value);

  }
}

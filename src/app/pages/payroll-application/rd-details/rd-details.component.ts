import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-details',
  templateUrl: './rd-details.component.html',
  styleUrls: ['./rd-details.component.scss']
})
export class RdDetailsComponent {

  constructor(private fb: FormBuilder) { }

  rdDetails= this.fb.group ({

    id: ["0"],
    rdStatus: [""],
    regNumber: [],
    rdAccountNum: [],
    memberName: [""],
    staffNumber: [],
    rdAmount: [],
    period: [],
    intRate: [],
    rdOpngDate: [""],
    rdMaturityDate: [""],
    maturityAmt: [],
  })

  onSubmit() {
    
    console.log(this.rdDetails.value);

  }
}

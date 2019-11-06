import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-lsf-details',
  templateUrl: './lsf-details.component.html',
  styleUrls: ['./lsf-details.component.scss']
})
export class LsfDetailsComponent {

  constructor(private fb: FormBuilder) { }

  lsfDetails= this. fb. group ({

    id: ["0"],
    status: [true],
    loanAccountNo: [],
    fromDate: [""],
    toDate: [""],
    cancelDate: [""],
    principalAmt: [],
    amtOfLsf: [],
    totalLsf: [],

  }) 

  onSubmit() {
    
    console.log(this.lsfDetails.value);

  }
}

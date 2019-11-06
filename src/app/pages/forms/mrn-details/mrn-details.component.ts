import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-mrn-details',
  templateUrl: './mrn-details.component.html',
  styleUrls: ['./mrn-details.component.scss']
})
export class MrnDetailsComponent {

  constructor(private fb: FormBuilder) { }

  mrnDetails= this.fb.group ({

    id: ["0"],
    client: [""],
    organization: [""],
    transactionNum: [],
    transactionDate: [""],
    staffNumber: [],
    name: [""],
    paymentFor: [""],
    paymentType: [""],
    paymentAmt: [],
    amtInWords: [""],
    chequeDate: [""],
    chequeNumber: [],
    chequeAmount: [],
    chequeBank: [""],
    chequeBranch: [""],
    description: [""],
    chequeClear: [""],
    chequeNotClear: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.mrnDetails.value);

  }
}

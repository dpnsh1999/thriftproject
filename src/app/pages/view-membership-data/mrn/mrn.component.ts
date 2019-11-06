import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-mrn',
  templateUrl: './mrn.component.html',
  styleUrls: ['./mrn.component.scss']
})
export class MrnComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  mrnDetails = this.fb.group ({
    id: [0],
    client: [""],
    organization: [""],
    reciptNo: [""],
    staffNumber: [""],
    name: [""],
    transactionDate: [""],
    paymentFor: [""],
    mode: [""],
    paymentAmt: [""],
    amtInWords: [""],
    chequeDate: [""],
    chequeNum: [""],
    chequeAmt: [""],
    bank: [""],
    branch: [""],
    description: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.mrnDetails.value);

  }
}

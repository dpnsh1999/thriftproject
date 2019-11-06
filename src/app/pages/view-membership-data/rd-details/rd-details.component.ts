import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-rd-details',
  templateUrl: './rd-details.component.html',
  styleUrls: ['./rd-details.component.scss']
})
export class RdDetailsComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  rdDetails = this.fb.group ({
    id: [0],
    rdStatus: [""],
    rdAccountNum: [],
    memberName: [""],
    staffNumber: [],
    rdAmount: [],
    period: [""],
    interestRate: [],
    rdOpeningDate: [""],
    maturityDate: [""],
    maturityAmt: [],
    payableInt: [],
    rdSettlementType: [""],
    closureDate: [""],
    amountInWord: [""],
    bankName: [""],
    payChequeNum: [],
    chequeDate: [""],
    description: [""],
  })

  onSubmit() {
    
    console.log(this.rdDetails.value);

  }
}

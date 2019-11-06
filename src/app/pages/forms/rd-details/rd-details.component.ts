import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-details',
  templateUrl: './rd-details.component.html',
  styleUrls: ['./rd-details.component.scss']
})
export class RDDetailsComponent {

  constructor(private fb: FormBuilder) { }

  rdDetails= this.fb.group ({
    id: ["0"],
    rdStatus: [""],
    regNumber: [],
    rdAccountNum: [],
    memberName: [""],
    staffNumber: [],
    rdAmount: [],
    scheme: [""],
    period: [],
    interestRate: [],
    rdOpeningDate: [""],
    maturityDate: [""],
    maturityAmount: [],
    payableInt: [],
    settlementDetails: this.fb.group ({
      id: ["0"],
      settlementType: [""],
      closureDate: [""],
      rdBalance: [],
      penalty: [],
      rdPaymentAmount: [],
      amountInWord: [""],
      voucherNumber: [],
      bankName: [""],
      chequeNumber: [],
      chequeDate: [""],
      approved: [""],
      description: [""],
      remark: [""],
      active: [""],
      voucherId: [],
    }),
  })

  onSubmit() {
    
    console.log(this.rdDetails.value);

  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-final-payment-details',
  templateUrl: './final-payment-details.component.html',
  styleUrls: ['./final-payment-details.component.scss']
})
export class FinalPaymentDetailsComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  finalPaymentDetails = this.fb.group ({
    id: [0],
    staffNum: [],
    memberName: [""],
    finalPaymentDate: [""],
    deathDate: [""],
    reasonSettlement: [""],
    nomineeName: [""],
    rdAmt: [],
    rdInt: [],
    thriftAmt: [],
    thriftInt: [],
    fafs: [""],
    fafsDeathPayment: [""],
    shareAmt: [],
    otherDeposite: [],
    pardonedAmt: [],
    totalPayment: [],
    payBy: [""],
    loanAmt: [],
    loanInt: [],
    otherRecovery: [],
    totalRecovery: [],
    netPayRecovery: [],

    bank: this.fb.group ({
      id: [0],
      bankName: [""],
      chequeNum: [],
      amount: [],
      AmtInWords: [""],
      approved: [""],
      active: [""],
    })
  })

  onSubmit() {
    
    console.log(this.finalPaymentDetails.value);

  }
}

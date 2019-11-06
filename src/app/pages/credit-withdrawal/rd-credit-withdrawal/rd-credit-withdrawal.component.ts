import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-credit-withdrawal',
  templateUrl: './rd-credit-withdrawal.component.html',
  styleUrls: ['./rd-credit-withdrawal.component.scss']
})
export class RdCreditWithdrawalComponent {

  constructor(private fb: FormBuilder) { }

  rdCreditWithdrawal= this.fb.group ({

    id: ["0"],
    regNumber: [],
    rdAccountNum: [],
    date: [""],
    depositType: [""],
    depositAmt: [],
    receiveChequeNum: [],
    receiveChequeDate: [""],
    bankName: [""],

    withdrawal: this.fb.group ({
      id: [0],
      rdCurrentBal: [],
      rdIntRate: [],
      interestPaid: [""],
      rdPeriod: [],
      principleAmt: [],
      rdTotalBal: [],
      rdWithdrawalDate: [""],
      withdrawalType: [""],
      withdrawalChqDate: [""],
      bankName: [""],
      active: [""],
    })
  })

  onSubmit() {
    
    console.log(this.rdCreditWithdrawal.value);

  }
}

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
    rdAccountNum: [],
    date: [""],
    creditType: [""],
    creditAmount: [],
    currentRdBal: [],
    selectAccount: [""],
  })

  onSubmit() {
    
    console.log(this.rdCreditWithdrawal.value);

  }
}

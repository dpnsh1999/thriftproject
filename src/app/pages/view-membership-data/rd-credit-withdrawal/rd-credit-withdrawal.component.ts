import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-rd-credit-withdrawal',
  templateUrl: './rd-credit-withdrawal.component.html',
  styleUrls: ['./rd-credit-withdrawal.component.scss']
})
export class RdCreditWithdrawalComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  rdCreditWithdrawal= this. fb. group ({
    id: ["0"],
    regNumber: [],
    rdAccountNum: [],
    date: [""],
    depositType: [""],
    depositAmt: [],
    receiveChequeNum: [],

    withdrawal: this.fb.group ({
      id: [0],
      rdCurrentBal: [],
      depositeInAcc: [],
      active: [""],
    })

  })

  onSubmit() {
    
    console.log(this.rdCreditWithdrawal.value);

  }
}

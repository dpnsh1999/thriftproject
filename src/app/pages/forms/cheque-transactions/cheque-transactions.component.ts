import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-cheque-transactions',
  templateUrl: './cheque-transactions.component.html',
  styleUrls: ['./cheque-transactions.component.scss']
})
export class ChequeTransactionsComponent {

  constructor(private fb: FormBuilder) { }

  chequeTransaction= this.fb.group ({

    id: [" 0 "],
    recFromPayTo: [""],
    transactionForm: [""],
    chequeType: [""],
    chequeNum: [],
    bankName: [""],
    receiveAmt: [],
    payAmt: [],
    chequeCleared: [""],
    clearanceDate: [""],
    status: [""],
    chequeDate: [""],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.chequeTransaction.value);

  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-rd-transaction',
  templateUrl: './rd-transaction.component.html',
  styleUrls: ['./rd-transaction.component.scss']
})
export class RdTransactionComponent {

  constructor(private fb: FormBuilder) { }

  rdTransaction= this.fb.group ({

    id: ["0"],
    rdAcountNum: [],
    date: [""],
    depositType: [""],
    depositAmount: [],
    rdCurrentBal: [],
  })

  onSubmit() {
    
    console.log(this.rdTransaction.value);

  }
}

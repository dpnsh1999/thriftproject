import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-thrift-credit-details',
  templateUrl: './thrift-credit-details.component.html',
  styleUrls: ['./thrift-credit-details.component.scss']
})
export class ThriftCreditDetailsComponent {

  constructor(private fb: FormBuilder) { }

  thriftCredit= this.fb.group ({

    id: ["0"],
    personalDetailsBkt: [""],
    staffNumber: [],
    thriftDepositDate: [""],
    transactionType: [""],
    chequeNumber: [],
    thriftAmount: [],
    withdrawalAmt: [],
    thriftBalance: [],
    description: [""],
  })

  onSubmit() {
    
    console.log(this.thriftCredit.value);

  }
}

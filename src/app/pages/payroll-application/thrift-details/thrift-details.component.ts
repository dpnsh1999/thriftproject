import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-thrift-details',
  templateUrl: './thrift-details.component.html',
  styleUrls: ['./thrift-details.component.scss']
})
export class ThriftDetailsComponent {

  constructor(private fb: FormBuilder) { }

  thriftDetails= this.fb.group ({

    id: ["0"],
    date: [""],
    transactionType: [""],
    thriftAmt: [],
    withdrawalAmt: [],
    thriftBal: [],
    chequeNumber: [],
    accountType: [""],
  })

  onSubmit() {
    
    console.log(this.thriftDetails.value);

  }
}

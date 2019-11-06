import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-thrift-deposit',
  templateUrl: './thrift-deposit.component.html',
  styleUrls: ['./thrift-deposit.component.scss']
})
export class ThriftDepositComponent {

  constructor(private fb: FormBuilder) { }

  thriftDeposit= this. fb. group ({

    date:[""],
    transactionType:[""],
    chequeNo:[],
    accountNo:[],
    thriftAmt:[],
    withdrawalAmt:[],
    thriftBal:[],
    
  }) 

onSubmit() {
    
  console.log(this.thriftDeposit.value);

  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-thrift-credit-details',
  templateUrl: './thrift-credit-details.component.html',
  styleUrls: ['./thrift-credit-details.component.scss']
})
export class ThriftCreditDetailsComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  thriftCreditDetails = this.fb.group ({
    id: [0],
    thriftDepositeDate: [""],
    transactionType: [""],
    chequeNo: [],
    thriftAmt: [],
    withdrawalAmt: [],
    thriftBal: [],
    DepInAccount: [],
    description: [""],
    active: [""],
  })

 onSubmit() {
    
    console.log(this.thriftCreditDetails.value);

  }
}
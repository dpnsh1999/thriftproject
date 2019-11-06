import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss']
})
export class VoucherDetailsComponent {

  constructor(private fb: FormBuilder) { }
  
  voucherDetails= this. fb. group ({

    id: ["0"],
    voucherType: [""],
    status: [""],
    voucherNum: [],
    staffNumber: [],
    name: [""],
    voucherFromDate: [""],
    payableAmt: [],
    amountInWords: [""],
    active: [""],

  })

  onSubmit() {
    
    console.log(this.voucherDetails.value);

  }
}
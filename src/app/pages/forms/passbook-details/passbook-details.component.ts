import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-passbook-details',
  templateUrl: './passbook-details.component.html',
  styleUrls: ['./passbook-details.component.scss']
})
export class PassbookDetailsComponent {

  constructor(private fb: FormBuilder) { }

  passBookDetails= this.fb.group ({

    id: ["0"],
    staffNumber: [],
    memberName: [""],
    regNumber: [],
    lastPrintDate: [""],
    printAfterLine: [""],
    passbookIssued: [""],
    issueDate: [""],

    passBook: this.fb.group ({

      id: ["0"],
      registrationNum: [],
      date: [""],
      transactionType: [""],
      thriftDr: [],
      thriftCr: [],
      balance: [],
      transType: [""],
      loanDr: [],
      loanCr: [],
      principleAmt: [],
      intAmount: [],
      rmngLoan: [],
      chequeNum: [],
    })
  })

  onSubmit() {
    
    console.log(this.passBookDetails.value);

  }
}

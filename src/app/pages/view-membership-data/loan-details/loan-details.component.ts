import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  loanDetail= this.fb.group ({
    id: [0],
    status: [""],
    loanAccountNumber: [],
    loanType: [""],
    staffNumber: [],
    memberName: [""],
    loanRequested: [""],
    loanAmt: [],
    loanBalance: [],
    IntRate: [],
    installment: [],
    periodInMonths: [],
    applyDate: [""],
    shareNeeded: [""],
    shareValue: [""],
    staffOne: [""],
    nameOne: [""],
    staffTwo: [""],
    nameTwo: [""],
    lsfUpto: [""],
    lsfAmt: [],
    amtInWords: [""],
    approved: [""],
    totalLoanPaidAmt: [],
    totalRmngBal: [],
    comments: [""],

  })

  onSubmit() {
    
    console.log(this.loanDetail.value);

  }
}

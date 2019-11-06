import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  totalBalance= this.fb.group ({
    id:[0],
    memberName: [""],
    staffNo: [],
    regNumber: [],
    dateOfEntry: [""],
    monthlyThriftAmt: [],
    thriftOpngBal: [],
    totalThriftBal: [],
    thriftIntPaid: [],
    rdAmt: [],
    opngBal: [],
    totalRdBal: [],
    yearlyFafsAmt: [],
    totalFafsAmt: [],
    shareOpngBal: [],
    totalShareValue: [],
    totalShare: [],
    loanOpngBal: [],
    numOfLoan: [],
    loanAmt: [],
    loanExcessAmt: [],
    loanEmi: [],
    licTotalBal: [],
    mcgAmt: [],
    monthlyDeduction: [],
    TotalAdviseDeduction: [],
    active: [""],
  })

  onSubmit() {
    
    console.log(this.totalBalance.value);

  }
}

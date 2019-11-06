import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-payroll-deduction',
  templateUrl: './payroll-deduction.component.html',
  styleUrls: ['./payroll-deduction.component.scss']
})
export class PayrollDeductionComponent {

  constructor(private fb: FormBuilder) { }

  payrollDeduction= this.fb.group ({

    id: ["0"],
    client: [""],
    organization: [""],
    importErrorMsg: [""],
    regNumber: [],
    staffNumber: [],
    payrollAmt: [],
    date: [""],
    thriftAmt: [],
    diffThriftAmt: [],
    shareAmt: [],
    diffShareAmt: [],
    membershipFeeAmt: [],
    diffMemberFeeAmt: [],
    grossaryAmt: [],
    grossaryDiffAmt: [],
    loanAmt: [],
    diffLoanAmt: [],
    rdAmount: [],
    diffRdAmt: [],
    fafsAmount: [],
    diffFafsAmt: [],
    mcgfAmount: [],
    diffMcgfAmount: [],
    fafsNonRefundable: [],
    equiAdjustmentValue: [""],
    diffValue: [""],
    rmngLoanAmt: [],
  })

  onSubmit() {
    
    console.log(this.payrollDeduction.value);

  }
}

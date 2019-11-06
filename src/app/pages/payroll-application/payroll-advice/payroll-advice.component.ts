import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-payroll-advice',
  templateUrl: './payroll-advice.component.html',
  styleUrls: ['./payroll-advice.component.scss']
})
export class PayrollAdviceComponent {

  constructor(private fb: FormBuilder) { }

  payrollAdvice= this.fb.group ({

    id: ["0"],
    registrationNum: [],
    regType: [""],
    regNumber: [],
    staffNumber: [],
    memberName: [""],
    thrift: [""],
    rdBalance: [],
    grossaryBal: [],
    recoveryEmail: [""],
    loanEmi: [],
    total: [""],
  })

  onSubmit() {
    
    console.log(this.payrollAdvice.value);

  }
}

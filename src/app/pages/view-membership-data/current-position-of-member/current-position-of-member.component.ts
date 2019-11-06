import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-current-position-of-member',
  templateUrl: './current-position-of-member.component.html',
  styleUrls: ['./current-position-of-member.component.scss']
})
export class CurrentPositionOfMemberComponent {

  constructor( private fb: FormBuilder, private apiService: ApiService ) { }

  CrntPositionOfMember = this.fb.group ({

    id: [0],
    memberStatus: [""],
    typeOfReg: [""],
    regNumber: [],
    memberName: [""],
    staffNumber: [],
    gender: [""],
    fatherName: [""],
    dob: [""],
    rtDate: [""],
    address: [""],
    CrntThriftBal: [],
    CrntShareBal: [],
    CrntRdBal: [],
    loanType: [""],
    loanAmt: [],
    emergLoanAmt: [],
    emiAmt: [],
    emiPaidThisMont: [""],
    principlePaid: [""],
    intPaid: [""],
    totalRmngBal: [],
  })

  onSubmit() {
    
    console.log(this.CrntPositionOfMember.value);

  }
}

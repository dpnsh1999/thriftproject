import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-loan-verification',
  templateUrl: './loan-verification.component.html',
  styleUrls: ['./loan-verification.component.scss']
})
export class LoanVerificationComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  loanVerification= this.fb.group ({

    id: [0],
    typeOfReg: [""],
    regNumber: [],
    memberStatus:[""],
    reasonCloser:[],
    dateOfAccountCloser:[""],
    membsershipNumber:[],
    dateOfMembership:[""],
    staffNumber:[],
    PrsnlDetailsBkt:[""],
    comments:[""],
    address: this.fb.group({
      id: [0],
      officeAdd:[""],
      grossSalary:[],
      division:[""],
      grade:[""],
      bankPin:[],
      panNumber:[""],
      billNumber:[],
      
    }),
    bank: this.fb.group({
      id: [0],
      extraTwo:[""],
      accountNo:[],
      bankBranchName:[""],
      bankBranchCode:[""],
      bankIfscCode:[""],
      bankSwiftCode:[""],
      addOfBank:[""],
      bankCity:[""],
    }),
    extraOne:[""],
    relation:[""],
    firstName:[""],
    middleName:[""],
    lastName:[""],
    memberName:[""],
    gender:[""],
    category:[""],
    dob:[""],
    rtDate:[""],
    fatherName:[""],
    phoneNumber:[],
    eMail:[""],
    currentAdd:[""],
    onlineAccess:[""],
    thriftAmount:[""],
    guarantorEmi:[""],
    
  })

  onSubmit() {
    
    console.log(this.loanVerification.value);

  }
}

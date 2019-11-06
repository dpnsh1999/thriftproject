import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  personalDetails= this.fb.group ({
    id: [0],
    typeOfReg: [""],
    regNumber: [],
    memberStatus:[true],
    memberNumber:[],
    dateOfMembership:[""],
    staffNumber:[],
    registrationNumber:[],
    comments:[""],
    address: this.fb.group({
      id: [0],
      officeAdd:[""],
      grossSalary:[],
      division:[""],
      grade:[""],
      pinCode:[],
      panNumber:[""],
      billNumber:[],
      designation:[""],
    }),
    bank: this.fb.group({
      id: [0],
      bankName:[""],
      accountNo:[],
      branchName:[""],
      branchCode:[""],
      ifscCode:[""],
      swiftCode:[""],
      addOfBank:[""],
      city:[""],
    }),
    nomineeName:[""],
    relation:[""],
    password:[""],
    active:[""],
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
    issued:[""],
    issueDate:[""],
    onlineAccess:[""],
    thriftAmtTwo:[""],
    
    
  })

  onSubmit() {
    
    console.log(this.personalDetails.value);

  }
}

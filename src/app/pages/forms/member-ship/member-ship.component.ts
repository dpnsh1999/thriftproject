import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'ngx-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.scss']
})
export class MemberShipComponent {
   
  constructor( private fb: FormBuilder, private apiService: ApiService) { }

  membershipForm = this.fb.group ({
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
    membershipAmount:[],
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
    
    console.log(this.membershipForm.value);
    this.apiService.getMemberDetails(this.membershipForm.value).subscribe((result)=>{
      console.log(result);
      if(result){
        console.log(result)
        
      }else{

       }
    });

    this.apiService.createMemberRegistration(this.membershipForm.value).subscribe((result)=>{
      console.log(result);
      if(result){
        console.log(result)
        
      }else{

       }
    });

    // this.apiService.updateMemberDetails(this.membershipForm.value).subscribe((result)=>{
    //   console.log(result);
    //   if(result){
    //     console.log(result)
        
    //   }else{

    //    }
    // });
  }
}


   

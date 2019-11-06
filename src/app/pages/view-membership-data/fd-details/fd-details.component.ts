import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-fd-details',
  templateUrl: './fd-details.component.html',
  styleUrls: ['./fd-details.component.scss']
})
export class FdDetailsComponent {

  constructor(private fb: FormBuilder, private apiservice : ApiService) { }
  
  fdDetails= this. fb.group ({
    id: [0],
    status:[""],
    certificateNumber:[],
    fdNumber:[],
    fdLoanLock:[""],
    loanAccountNumber:[""],
    memberName:[],
    staffNumber:[],
  
   fdDeposite: this. fb.group({
    id: [0],
    modeOfRecAmount:[],
    mrNumber:[],
    fdAmountInWords:[""],
    normalSchemes:[""],
    specialSchemes:[""],
    fdAmount:[""],
    bearingInt:[],
    fdOpenDate:[""],
    comments:[""],
 }),

  nominee:this. fb.group ({
    id: [0],
    jointName:[""],
    nomineeName:[""],
    relation:[""],
  }),

  operations:this. fb.group ({
    id: [0],
    fdBalance:[],
    totalInterest:[],
    genpayableAmt:[],
  }),

  summary:this. fb.group ({
    id: [0],
    closureDate:[""],
    totalAmtWithdrawn:[],
    amountRenewed:[],
  }),

  misDetails:this. fb.group ({
    id: [0],
    paymentDate:[""],
    misamount:[],
    paymentType:[],
    chequeNumber:[""],
    bankName:[],
  }),

  maturityDetails:this. fb.group ({
    id: [0],
    maturityDate:[""],
    maturityAmount:[],
    modeOfPayment:[""],
    chequeNoOfPayment:[],
    chequeDateOfPayment:[""],
    bankName:[""],
    lfdAdjustAmount:[],
    amountInWords:[""],
  }),
})


  onSubmit() {
    
    console.log(this.fdDetails.value);

  }
}

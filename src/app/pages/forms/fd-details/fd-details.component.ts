import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-fd-details',
  templateUrl: './fd-details.component.html',
  styleUrls: ['./fd-details.component.scss']
})
export class FdDetailsComponent  {

  constructor( private fb: FormBuilder )  { }

  fdDetails= this. fb.group ({
    id: [0],
    certificateNumber:[],
    status:[true],
    name:[""],
    fdLockDueToLfd:[""],
    fdNumber:[],
    loanAccountNumber:[],
    certificateNo:[],
    staffNumber:[],
  
   fdDeposite: this. fb.group({
    id: [0],
    modeOfRecAmount:[],
    fdAmount:[],
    fdAmountInWords:[""],
    normalSchemes:[""],
    specialSchemes:[""],
    misSchemes:[""],
    rateInterest:[],
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
  interestRate:[],
  totalInterest:[],
  mOverDueInterest:[],
  genpayableAmt:[""],
 }),

 summary:this. fb.group ({
  id: [0],
  closureDate:[""],
  totalAmtWithdrawn:[],
  amountRenewed:[],
 }),

 misDetails:this. fb.group ({
  id: [0],
  status:[""],
  fdCertificateNumber:[],
  fdMisId:[],
  fdOpeningDate:[""],
  misAmount:[],
  amountInWords:[""],
  lfdAdjustAmount:[],
  paymentType:[""],
  chequeDate:[""],
  chequeNumber:[],
  bankName:[""],
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
  voucherNumber:[],
  approved:[""],
 }),

  })

  onSubmit() {
    
    console.log(this.fdDetails.value);

  }
}

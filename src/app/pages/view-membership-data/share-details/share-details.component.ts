import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-share-details',
  templateUrl: './share-details.component.html',
  styleUrls: ['./share-details.component.scss']
})
export class ShareDetailsComponent {

  constructor(private fb: FormBuilder, private apiService : ApiService) { }

  shareDetail= this.fb.group ({
    id: [0],
    status: [""],
    certificateNumber: [],
    staffNumber: [],
    certificateAtBack: [""],
    memberName: [""],
    allocationDate: [""],
    shareAllocationForm: [""],
    shareAmt: [],
    shareAllocatedNo: [],
    certificatePrinted: [""],
    paymentType: [""],
    approved: [""],
    active: [""],
    AmtInWord: [""],
  })

  onSubmit() {
    
    console.log(this.shareDetail.value);

  }
}

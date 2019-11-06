import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-share-certificate',
  templateUrl: './share-certificate.component.html',
  styleUrls: ['./share-certificate.component.scss']
})
export class ShareCertificateComponent {

  constructor(private fb: FormBuilder) { }

  genCertificate= this.fb.group ({

    id: ["0"],
    printCertificateNum: [],
    allocatedDate: [""],
    numPritedAtBack: [],
    staffNumber: [],
    memberName: [""],
    fatherName: [""],
    shareBalance: [],
    numOfShare: [],
    shareId: [],
    allocateDate: [""],
    allocatedForm: [""],
    shareValue: [],
    share: [],
  })

  onSubmit() {
    
    console.log(this.genCertificate.value);

  }
}

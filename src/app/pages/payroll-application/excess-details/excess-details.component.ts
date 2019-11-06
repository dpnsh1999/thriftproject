import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-excess-details',
  templateUrl: './excess-details.component.html',
  styleUrls: ['./excess-details.component.scss']
})
export class ExcessDetailsComponent {

  constructor(private fb: FormBuilder) { }

  excessDetails= this.fb.group ({

    id: ["0"],
    staffNumber: [],
    memberName: [""],
    excessId: [""],
    paymentStatus: [""],
    excessAmtDate: [""],
    excessFrom: [""],
    excessAmt: [],
    amtInWords: [""],

    paymentDetails: this.fb.group ({

      id: ["0"],
      paymentType: [""],
      paymentDate: [""],
      chequeDate: [""],
      chequeNumber: [],
      bankName: [""],
      approved: [""],
      comments: [""],
      active: [""],
    }),

    operations: this.fb.group ({

      id: ["0"],
      approved: [""],
      comments: [""],
      active: [""],
    })  
      
  })

  onSubmit() {
    
    console.log(this.excessDetails.value);

  }
}

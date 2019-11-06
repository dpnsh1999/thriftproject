import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent  {

  constructor(private fb: FormBuilder) { }

  personalDetails= this.fb.group ({

    id: ["0"],
    membershipStatus: [""],
    regType: [""],
    regNumber: [],
    staffNumber: [],
    memberName: [""],
    membershipDate: [""],
    membershipNumber: [],
  })

  onSubmit() {
    
    console.log(this.personalDetails.value);

  }
}

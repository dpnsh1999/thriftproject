import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-current-position',
  templateUrl: './current-position.component.html',
  styleUrls: ['./current-position.component.scss']
})
export class CurrentPositionComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  currentPosition = this.fb.group ({
    id: [0],
    staffNumber: [],
    memberName: [""],
    thriftBal: [],
    totalShare: [],
    activeLoanNum: [],
    loanBal: [],
    fafsBal: [],
    activeRdNum: [],
    rdBalance: [],
  })

  onSubmit() {
    
    console.log(this.currentPosition.value);

  }
}

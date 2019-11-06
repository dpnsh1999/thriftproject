import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-guarantor-recovery',
  templateUrl: './guarantor-recovery.component.html',
  styleUrls: ['./guarantor-recovery.component.scss']
})
export class GuarantorRecoveryComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  guarantorRecovery = this.fb.group ({
    id: [0],
    name: [""],
    amount: [],
    emi: [],
    details: [""],
  })

  onSubmit() {
    
    console.log(this.guarantorRecovery.value);

  }
}

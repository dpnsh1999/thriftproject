import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-yearly-details',
  templateUrl: './yearly-details.component.html',
  styleUrls: ['./yearly-details.component.scss']
})
export class YearlyDetailsComponent {

  constructor(private fb : FormBuilder, private apiService : ApiService) { }

  yearlyDetails = this.fb.group ({
    id: [0],
    staffNumber: [],
    entryDate: [""],
    fafsDeposite: [],
    fafsWithdrawal: [],
    fafsBalance: [],
    mcgfDeposite: [],
    mcgfWithdrawal: [],
    mcgfAmt: [],
    description: [""],
  })

  onSubmit() {
    
    console.log(this.yearlyDetails.value);

  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'ngx-recurring-forms',
  templateUrl: './recurring-forms.component.html',
  styleUrls: ['./recurring-forms.component.scss']
})
export class RecurringFormsComponent  {

  constructor( private fb: FormBuilder, private apiService: ApiService ) { }
   
  rdDetails= this. fb. group ({

    statusOfRd:[""],
    registrationNumber:[],
    rdAccountNumber:[],
    memberName:[""],
    staffNumber:[],
    rdAmount:[],
    period:[],
    interestRate:[],
    rdOpeningDate:[""],
    rdMaturityDate:[""],
    maturityAmount:[],
    payableInterest:[],
  })
   

  onSubmit() {
    
    console.log(this.rdDetails.value);
    this.apiService.createRecurringForm(this.rdDetails.value).subscribe((result)=>{
      console.log(result);
      if(result){
        console.log(result)
        
      }else{

       }
    });
  
    }
  }
  

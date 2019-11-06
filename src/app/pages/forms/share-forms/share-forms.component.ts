import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-share-forms',
  templateUrl: './share-forms.component.html',
  styleUrls: ['./share-forms.component.scss']
})
export class ShareFormsComponent {

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  shareForm= this.fb.group ({
    
    id:[0],
    memberName:[""],
    staffNumber:[],
    shareAllocationNumber:[],
    status:[""],
    shareAllocationForm:[""],
    allocationDate:[""],
    shareAllocatedAmt:[],
    shareAllocatedNo:[],
  })

  onSubmit() {
    
    console.log(this.shareForm.value);
    this.apiService.createShareForm(this.shareForm.value).subscribe((result)=>{
      console.log(result);
      if(result){
        console.log(result)
        
      }else{

       }
    });

  }

}

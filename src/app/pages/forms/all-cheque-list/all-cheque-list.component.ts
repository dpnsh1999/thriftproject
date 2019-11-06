import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-all-cheque-list',
  templateUrl: './all-cheque-list.component.html',
  styleUrls: ['./all-cheque-list.component.scss']
})
export class AllChequeListComponent {

  constructor(private fb: FormBuilder) { }
   
  allChequeList= this.fb.group({

    id: ["0"],
    status: [""],
    chequeDate: [""],
    payTo: [""],
    transactionForm: [""],
    chequeType: [""],
    chequeNum: [],
    bankName: [""],
    receiveAmt: [],
    payAmount: [],
    cleared: [""],
    clearanceDate: [""],
    active: [""],

  })
    

  onSubmit() {
    
    console.log(this.allChequeList.value);

  }
}

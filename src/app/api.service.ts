import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {  
  
  API_KEY = 'YOUR_API_KEY';
  constructor(private httpClient: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // } 

  public getMemberDetails(data){
    console.log(data)
    return this.httpClient.get(`http://172.104.42.153:/membership_controller/getMemberDetails`, data);
  }

  public createMemberRegistration(data){
    console.log(data)
    return this.httpClient.post(`http://172.105.59.34/membership_controller/registration`, data);
  }

  // public updateMemberDetails (data){
  //   console.log(data)
  //   return this.httpClient.put(`http://172.105.59.34/membership_controller/updateMemberDetails`, data);
      
  // }

  public createRecurringForm(data){
    console.log(data)
    return this.httpClient.post(`http://172.105.59.34/recurring_deposit_controller/save_recurring_deposit`, data);
  }

  public createShareForm(data){
    console.log(data)
    return this.httpClient.post(`http://172.105.59.34/share_controller/allocate_share`, data);
  }
}

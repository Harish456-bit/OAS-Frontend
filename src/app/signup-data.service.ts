import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupDataService {
  
  private signupData: any = {};
    data: any;

  constructor(private http: HttpClient) { }


  postSignupData(data: any) {
    this.data;
  }

  getSignupData() {
    return this.signupData;
  }
}

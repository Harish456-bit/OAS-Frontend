import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainComponent } from './domain/domain.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  constructor(private http: HttpClient) {}
//     const query = `SELECT * FROM userregistration WHERE username = '${this.username}' AND password = '${this.password}';`;
// localhost:8080/userlogin?username=hari123&password=123456/
 // executeQuery(username : any, password: any) {
   // return this.http.get<any[]>('http://localhost:8080/executeQuery', { params: { query } });
//  }◘◘
   
  executeQuery(username : any, password: any) {   
   return this.http.get<any>('http://localhost:8080/userlogin?username='+ username +'&password='+ password);
}

postResult(data: any) {
  return this.http.post('http://localhost:8080/result', data);
}

  postData(data: any) {
    return this.http.post('http://localhost:8080/product', data);
  }
  getQuestion(data:any){
    return this.http.get('http://localhost:8080/domain?domain='+ data)
  }
  getMarks(username:any,domain:any,visit:any){
    return this.http.get('http://localhost:8080/marks?username='+ username +'&domain='+ domain+'&visit='+visit);
  }
}



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  private dataSubject = new BehaviorSubject<string>(''); 
  public data$ = this.dataSubject.asObservable();

  private userSubject = new BehaviorSubject<string>('');
  public user$ = this.userSubject.asObservable();

  private visitSubject = new BehaviorSubject<string>(''); 
  public visit$ = this.visitSubject.asObservable();
  setDomain(data: any) {
    this.dataSubject.next(data);
  }
  setUsername(data: any) {
    this.userSubject.next(data);
  }
  setVisit(data : any) {
    this.visitSubject.next(data);
  }
}

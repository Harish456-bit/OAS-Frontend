import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent  implements OnInit {
  myForm: any;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private datatransferService: DatatransferService,

  ) {}
  
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  goToInstructions() {
    this.dataService.executeQuery(this.myForm?.controls?.username?.value, this.myForm?.controls?.password?.value).subscribe (
        (result: any[]) => {
          if (result.length > 0) {
            this.datatransferService.setUsername(this.myForm?.controls?.username?.value);
            this.datatransferService.setVisit(result[0].visit);
            this.router.navigate(['/instructions']);
          } else {
            console.log('Invalid credentials');
          }
        },
        (error: any) => {
          console.log('An error occurred:', error);
        }
      );
  }
}


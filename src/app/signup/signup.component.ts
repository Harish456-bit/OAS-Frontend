import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: any;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  goToLogin() {
    this.dataService.postData(this.myForm.value).subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      error => {
      }
    );
  }
}

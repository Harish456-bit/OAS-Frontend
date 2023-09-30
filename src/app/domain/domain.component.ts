import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { DatatransferService } from '../datatransfer.service';


@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent {
  myForm!: FormGroup;
  jsonData: any = [
    {
      id: '1',
      domain: 'ECE',
      domainname: 'Electronics and communication'
    },
    {
      id: '2',
      domain: 'CS/IT',
      domainname: 'Computer science or Information technology'
    },
    {
      id: '3',
      domain: 'MECH',
      domainname: 'Mechanical'
    },
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private datatransferService: DatatransferService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      selectedDomain: ['', Validators.required],
      question: ['', Validators.required],
      result: ['', Validators.required],
    });
  }

  goToProtrocor() {
    const selectedDomain = this.myForm.get('selectedDomain')?.value;
    const selectedData = this.jsonData.find((data: any) => data.domain === selectedDomain);
    if (selectedData) {
      this.datatransferService.setDomain(selectedData);
      this.router.navigate(['/protrocor']);
    }
  }  
}



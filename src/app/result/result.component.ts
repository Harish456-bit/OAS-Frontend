import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatatransferService } from '../datatransfer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  domain: string = '';
  username: string = '';
  userResponses: any[] = [];
  totalQuestions: number = 0;
  score: number = 0;
  visit: any;

  constructor(
    private route: ActivatedRoute,
    private datatransferService: DatatransferService,
    private dataService: DataService 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.domain = params['domain'];
      this.username = params['username'];
      this.visit =params['visit'];;
    });

    this.fetchUserResults(); 

  }

  fetchUserResults() {
    this.dataService.getMarks(this.username, this.domain ,this.visit).subscribe (
      (result: any) => {
        this.score=result
        console.log('An error occurred:', result);
      },
      (error: any) => {
        console.log('An error occurred:', error);
      }
    );
  }
}



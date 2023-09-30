import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatatransferService } from '../datatransfer.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  jsonData: any;
  myForm!: FormGroup;
  domain: string = '';
  username: string = ''; 
  visit: any;

  constructor(
    private dataService: DataService,
    private datatransferService: DatatransferService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {
    this.fetchQuestionData();
  }

  fetchQuestionData() {
    this.datatransferService.user$.subscribe((data: any) => {    
      this.username = data; 

    });
    this.datatransferService.visit$.subscribe((data:any)=>{
      this.visit=data;
    });



    this.datatransferService.data$.subscribe((data: any) => {
      console.log(data);
      this.domain = data.domain; 

      this.dataService.getQuestion(data.domain).subscribe(
        (result: any) => {
          console.log(result);
          this.jsonData = result;
          this.buildForm();
        },
        (error: any) => {
          console.log('An error occurred:', error);
        }
      );
    });
  }


  buildForm() {
    const formControls: { [key: string]: FormControl } = {};
    this.jsonData.forEach((item: any, index: number) => {
      formControls[`selectedOption_${index}`] = new FormControl('');
    });
    this.myForm = this.formBuilder.group(formControls);
  }

  onSubmit() {
    if (this.myForm.valid) {
      const userResponses: any[] = [];

      this.jsonData.forEach((item: any, index: number) => {
        const selectedOption = this.myForm.get('selectedOption_' + index)?.value;
        if (selectedOption) {
          const userResponse = {
            'question': item.question,
            'result': selectedOption,
            'domain': this.domain,
            'username':this.username,
            'visit':this.visit
          };
          userResponses.push(userResponse);
        }
      });
      this.dataService.postResult(userResponses).subscribe(
        response => {
          console.log('User Submitted Data (Array of Objects):', response);
          this.router.navigate(['/result'],{ queryParams: { domain: this.domain , username: this.username , visit: this.visit } });
          this.myForm.reset();
        },
        error => {
        }
      );

      console.log('User Submitted Data (Array of Objects):', userResponses);
      console.log('Username:', this.username);
      console.log('Domain:', this.domain);

      this.myForm.reset();
    }
  }

  onOptionSelected(currentIndex: number, selectedOption: string) {
    this.myForm.get(`selectedOption_${currentIndex}`)?.setValue(selectedOption);

    const nextIndex = currentIndex + 1;
    if (nextIndex < this.jsonData.length) {
      const nextElement = document.getElementById(`choice1_${nextIndex}`);
      if (nextElement) {
        nextElement.focus();
      }
    }
  }
}











// import { Component, OnInit } from '@angular/core';
// import {
//   FormArray,
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { DataService } from '../data.service';
// import { DatatransferService } from '../datatransfer.service';

// @Component({
//   selector: 'app-questions',
//   templateUrl: './questions.component.html',
//   styleUrls: ['./questions.component.css']
// })
// export class QuestionsComponent implements OnInit {
//   isSubmitted = false;
//   registrationForm!: FormGroup;
//   jsonData: any;
//   submittedData: any;
//   domain: any;
//   username: any;
//   data1 = [
//     {
//       question: 'Which capacitor-store higher amount of energy?',
//       option1: 'air capacitor ',
//       option2: 'paper capacitor',
//       option3: 'mica capacitor',
//       option4: 'Plastic film capacitor',
//       result: 'mica capacitor',
//       domain: 'ECE',
//     },
//     {
//       question: 'Which of the following is a unit of electrical power?',
//       option1: 'Volt',
//       option2: 'Ampere',
//       option3: 'Watt',
//       option4: 'Ohm',
//       result: 'Watt',
//       domain: 'ECE',
//     },
//     {
//       question: 'The time taken by a signal to complete one cycle is called:?',
//       option1: 'Frequency',
//       option2: 'Amplitude',
//       option3: 'Period',
//       option4: 'Wavelength',
//       result: 'Period',
//       domain: 'ECE',
//     },
//   ];

//   constructor( 
//     private dataService: DataService,
//     private datatransferService: DatatransferService,
//     private fb: FormBuilder) {
    
//   }

//   ngOnInit() {
//     this.fetchQuestionData();
//     this.registrationForm = this.fb.group({
//       result1: [''],
//       result2: [''],
//       result3: [''],
//       result4: [''],
//     });
//   }

//   fetchQuestionData() {
//     this.datatransferService.data$.subscribe((data: any) => {
//       console.log(data);
//       this.domain = data;
//       this.dataService.getQuestion(data.domain).subscribe(
//         (result: any) => {
//           console.log(result);
//           this.jsonData = result;
//         },
//         (error: any) => {
//           console.log('An error occurred:', error);
//         }
//       );
//     });
//   }

//   onSubmit() {
//     this.isSubmitted = true;
//     if (!this.registrationForm.valid) {
//       return false;
//     } else {
//       return alert(JSON.stringify(this.registrationForm.value));
//     }
//   }
// }






/*import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatatransferService } from '../datatransfer.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  jsonData: any;
  submittedData: any;
  myForm: FormGroup;
  domain: any;
  username: any;

  constructor(
    private dataService: DataService,
    private datatransferService: DatatransferService,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      selectedOption1: [''],
      selectedOption2: [''],
      selectedOption3: [''],
      selectedOption4: [''],
      selectedOption5: [''],
      selectedOption6: [''],
    });
  }

  ngOnInit() {
    this.fetchQuestionData();

    this.jsonData.forEach((value: any, key: any) => {
      // Perform operations with each element in the array
      console.log(`Key: ${key}, Value: ${value}`);
    });
  }

  fetchQuestionData() {
    this.datatransferService.data$.subscribe((data: any) => {
      console.log(data);
      this.domain = data;
      this.dataService.getQuestion(data.domain).subscribe(
        (result: any) => {
          console.log(result);
          this.jsonData = result;
         // this.initializeForm();
        },
        (error: any) => {
          console.log('An error occurred:', error);
        }
      );
    });
  }

  // initializeForm() {
  //   const formControls: { [key: string]: FormControl } = {};
  //   this.jsonData.forEach((item: any, i: number) => {
  //     formControls[`selectedOption_${i}`] = new FormControl('');
  //   });
  //   this.myForm = this.formBuilder.group(formControls);
  // }

  onSubmit() {
    if (this.myForm && this.myForm.valid) {
      this.submittedData = this.myForm.value;
      console.log('Submitted data:', this.submittedData);
      // Do any further processing or handle the data as needed

      // Reset the form if needed
      this.myForm.reset();
    }
  }
}*/


// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { DatatransferService } from '../datatransfer.service';
// import { FormGroup, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-questions',
//   templateUrl: './questions.component.html',
//   styleUrls: ['./questions.component.css']
// })
// export class QuestionsComponent implements OnInit  {
//   jsonData:any
//   submittedData: any;
//   myForm!: FormGroup;
//   domain: any;
//   username: any;

//   constructor(
//     private dataService: DataService,
//     private datatransferService: DatatransferService
//   ) {  
//     this.datatransferService.data$.subscribe((data: string) => {
//       console.log(data)
//       this.domain =data;
//   //    this.fetchquestiondata(data)

//   })
//   this.datatransferService.user$.subscribe((data: string) => {
//     console.log(data)
//     this.username = data;
// })

// }
//   ngOnInit() {
//     this.fetchquestiondata(this.domain);
//   }

//   fetchquestiondata(data:any){
//     this.dataService.getQuestion(data.domain).subscribe (
//       (result: object) => {

//         console.log(result)
//         this.jsonData = result;
//       },
//       (error: any) => {
//         console.log('An error occurred:', error);
//       }
//     );
//   }

//   onSubmit(form: FormGroup) {
//     if (form && form.valid) {
//       this.submittedData = form.value;
//       console.log('Submitted data:', this.submittedData);
//       console.log(this.myForm.get('selectedOption')?.value);
//       // Do any further processing or handle the data as needed

//       // Reset the form if needed
//       form.reset();
//     }
//   }

// }




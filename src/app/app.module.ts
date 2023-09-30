import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ProtrocorComponent } from './protrocor/protrocor.component';
import { WebcamModule } from 'ngx-webcam';
import { NgxMicRecorderModule } from 'ngx-mic-recorder';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DomainComponent } from './domain/domain.component';
import { DatatransferService } from './datatransfer.service';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProtrocorComponent,
    QuestionsComponent,
    DomainComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    WebcamModule,
    NgxMicRecorderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DataService,DatatransferService],

  bootstrap: [AppComponent]
})
export class AppModule { }

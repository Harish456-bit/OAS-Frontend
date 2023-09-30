import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ProtrocorComponent } from './protrocor/protrocor.component';
import { DomainComponent } from './domain/domain.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'instructions', component: InstructionsComponent},
  { path:  'protrocor',component: ProtrocorComponent },
  { path:  'domain',component: DomainComponent },
  { path:  'result',component: ResultComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

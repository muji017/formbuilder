import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { HomeAuthGuard,LoginAuthGuard } from './auth/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,canActivate:[LoginAuthGuard] },
  { path: 'signup', component: SignupComponent,canActivate:[LoginAuthGuard] },
  { path: 'forms', component: FormsComponent,canActivate:[HomeAuthGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate:[HomeAuthGuard] },
  { path: 'forms/createform/:name', component: CreateFormComponent,canActivate:[HomeAuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

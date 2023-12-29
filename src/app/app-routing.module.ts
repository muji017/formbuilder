import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms/createform/:name', component: CreateFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

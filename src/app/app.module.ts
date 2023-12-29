import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { CreateFieldComponent } from './components/create-field/create-field.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    HeaderComponent,
    DashboardComponent,
    CreateDialogComponent,
    CreateFormComponent,
    SidemenuComponent,
    CreateFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [
    provideToastr({
      timeOut: 2000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      progressBar: true
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

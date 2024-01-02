import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { userModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { loginStart } from 'src/app/store/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr:ToastrService,
    private service: UserService,
    private userStore:Store<userModel>
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      password: this.formBuilder.control('',Validators.required)
    })
  }


  emailValid(): any {
    const email: any = this.loginForm.get('email')
    if (!email.valid) {
      if (email.errors.required) {
        return 'Please enter your mail Id'
      }
      else if (email.errors.pattern) {
        return 'Email is Invalid'
      }
    }
  }
  passwordValid(): any {
    const password: any = this.loginForm.get('password')
    if (!password.valid) {
      if (password.errors.required) {
        return 'Please enter your password'
      }
      // if(password.errors.minlength){
      //   return 'Password required minimum six length'
      // }
      // if(password.errors.pattern){
      //   return 'Password should contain one charactor one number and one special character'
      // }
    }
  }



  login() {
    const email: string = this.loginForm.get('email')?.value
    const password: string = this.loginForm.get('password')?.value
    
    if (!this.loginForm.valid) {
      if (this.emailValid()) {
        this.toastr.warning(this.emailValid())
        return
      }
      if (this.passwordValid()) {
        this.toastr.warning(this.passwordValid())
        return
      }
    }
   this.userStore.dispatch(loginStart({email,password})) 
    // this.service.login(email,password).subscribe(
    //   (response)=>{
    //     const trainer={
    //       trainerToken:response.trainerToken,
    //       trainerId:response.trainerId
    //     }
    //     const trainerJSON = JSON.stringify(trainer);
    //     localStorage.setItem('trainerToken', trainerJSON);
    //     this.router.navigate(['/trainer/home'])
    //   }
    //   ,(error)=>{
    //     this.toastr.error(error.error.error)
    //   }
    // )

  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup
  constructor(private service: UserService, private toastr: ToastrService
    , private router: Router, private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6),
      Validators.pattern('^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]+$')]),
      repassword: new FormControl('', Validators.required,)
    }, {

    })
  }
  showEmailError(): any {

    const email: any = this.signUpForm.get('email');
    if (!email.valid) {
      if (email.errors.required) {
        return 'Email is required';
      }
      if (email.errors.pattern) {
        return 'Invalid Email'
      }
    }
  }

  showPasswordError(): any {

    const password: any = this.signUpForm.get('password');
    if (!password.valid) {
      if (password.errors.required) {
        return 'Password is required';
      }

      if (password.errors.minlength) {
        return 'Password should be of minimum 6 characters';
      }
      if (password.errors.pattern) {
        return 'Password should contain atleast one character and number '
      }
    }
  }

  showReEnterPasswordError(): any {
    const repassword = this.signUpForm.get('repassword');
    const password: any = this.signUpForm.get('password')?.value;
    if (!repassword?.valid) {
      if (repassword?.hasError('required')) {
        return 'ReEnter your password';
      }
    }
  }

  signUp(){
    if (!this.signUpForm.valid) {
      if (this.showEmailError()) {
        this.toastr.warning(this.showEmailError())
        return
      }
      if (this.showPasswordError()) {
        this.toastr.warning(this.showPasswordError())
        return
      }
      if (this.showReEnterPasswordError()) {
        this.toastr.warning(this.showReEnterPasswordError())
        return
      }
      return
    }
    const repassword = this.signUpForm.get('repassword')?.value;
    const email: string = this.signUpForm.get('email')?.value
    const password: string = this.signUpForm.get('password')?.value
    if (repassword !== password) {
      this.toastr.warning("Password mismatch")
      return
    }
    
    this.service.signUp(email, password).subscribe(
      (response) => {
        this.toastr.success(`"You have successfully registered. Please proceed to log in with your email and password."`);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    )
  }
}

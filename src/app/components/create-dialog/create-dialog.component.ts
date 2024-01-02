import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent {
  form!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr:ToastrService,
    private dialog: MatDialog,
    private service: UserService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      formName: this.formBuilder.control('', [Validators.required]),
    })
  }
  close() {
    this.dialog.closeAll()
  }
  nameValid(): string | undefined {
    const name: AbstractControl | null = this.form.get('formName');

    if (name && !name.valid) {
      if (name.hasError('required')) {
        return 'Please enter your password';
      }
    }

    return undefined;
  }
  submit() {
    const name: string = this.form.get('formName')?.value
    if (!this.form.valid) {

      if (this.nameValid()) {
        this.toastr.warning(this.nameValid())
        return
      }
    }
    this.dialog.closeAll()
    this.router.navigate([`/forms/createform/${name}`])
  }
}

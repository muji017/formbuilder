import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css']
})
export class CreateFieldComponent {

  dynamicForm!: FormGroup;
  fieldName!: string
  option: string=''
  options: string[] = []
  fieldLabel!: string

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<CreateFieldComponent>,
  ) {
    this.data = data
    this.fieldName = this.data.field
    this.fieldLabel = ''
  }
  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
  }

  addOption(): void {
    const option = this.option
    if(!/^[a-zA-Z0-9\s]+$/.test(option)){
      this.toastr.warning(`option is Invalid`)
      return
    }
    if(this.options.includes(option)){
      this.toastr.warning(`${option} is already exist`)
      return
    }
    this.options.push(option)
    this.option = ''
  }
  removeOption(index: number) {
    this.options.splice(index, 1)
  }

  close() {
    this.dialog.close()
  }

  createField() {
    if (this.fieldLabel === '') {
      this.toastr.warning(`${this.fieldName} lebel is empty`)
      return
    }
    console.log(this.fieldLabel);
    if (this.fieldName == "textField") {
      const data: any = {
        fieldName: this.fieldName,
        fieldLabel: this.fieldLabel
      }
      this.dialog.close(data)
    }
    else if(this.fieldName=="dropBox"||this.fieldName=="checkBox"){
      if(this.options.length<=0){
        this.toastr.warning(`${this.fieldName} Options is empty`)
        return
      }else if(this.options.length<2){
        this.toastr.warning(`${this.fieldName} Options should be 2`)
        return
      }
      const data:any = {
        fieldName: this.fieldName,
        fieldLabel: this.fieldLabel,
        options:this.options 
      }
      this.dialog.close(data)
    }
  }
}

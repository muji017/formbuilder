import { Component,Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css']
})
export class CreateFieldComponent {

  dynamicForm!: FormGroup;
  fieldName!:string
  option!:string
  options:string[]=[]
  fieldLebel!:string

  constructor(
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialog:MatDialog
  ){
    this.data=data
    this.fieldName=this.data.field
  }
  ngOnInit(){
    this.dynamicForm = this.formBuilder.group({});
  }

  addOption(): void {
    const option=this.option
    this.options.push(option)
    this.option=''
  }
  removeOption(index:number){
    this.options.splice(index,1)
  }

  close() {
    this.dialog.closeAll()
  }

  createField(){
    if(this.fieldLebel===''){
      this.toastr.warning(`${this.fieldName} lebel is empty`)
    }
    
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFieldComponent } from '../create-field/create-field.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {

  formname: string = ''
  hasContent: boolean = false
  form!:FormGroup
  private subscriptions: Subscription[] = []
  textBox:any[]=[]
  dropBox:any[]=[]
  checkBox:any[]=[]
  constructor(
    private dialoge: MatDialog,
    private route: ActivatedRoute,
    private router:Router,
    private toastr:ToastrService,
    private formBuilder:FormBuilder,
    private service:UserService
  ) { }

  ngOnInit() {
    const getParams = this.route.params.subscribe((param) => {
      this.formname = param['name']
    })
    this.subscriptions.push(getParams)
    this.form=this.formBuilder.group({})
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    ev.preventDefault();
    let field = ev.dataTransfer.getData('text');
    let data = {
      field: field
    }
    const dialogRef = this.dialoge.open(CreateFieldComponent, {
      enterAnimationDuration: 1200,
      exitAnimationDuration: 1200,
      data: data
    })
    dialogRef.afterClosed().subscribe((data) => {
      const formControls:any={}
      console.log(data.fieldLabel);
      const fieldName = data.fieldName
      const label = data.fieldLabel;
      const labelTag = document.createElement('a')
      labelTag.innerHTML = "<br>" + label + "\t:";
      labelTag.classList.add('form-label');
      document.getElementById('formContainer')?.appendChild(labelTag);

      if (fieldName === 'textField') {
        const textField = document.createElement('input');
        textField.type = 'text';
        textField.id = label.toLowerCase();
        textField.name = label.toLowerCase();
        textField.placeholder = fieldName
        textField.readOnly = true;
        textField.classList.add('form-field');
        document.getElementById('formContainer')?.appendChild(textField);
        this.textBox.push(label);
      }

      if (fieldName === 'dropBox') {
        const label = data.fieldLabel;
        const optionValues: string[] = data.options
        const dropBox = document.createElement('select')
        optionValues.forEach(value => {
          const option = document.createElement('option');
          option.value = value;
          option.text = value;
          dropBox.appendChild(option);
        });
        dropBox.classList.add('form-field');
        document.getElementById('formContainer')?.appendChild(dropBox);
        this.dropBox.push({head:label,options:optionValues})
      }

      if (fieldName === 'checkBox') {
      
        const optionValues: string[] = data.options;
        const checkBoxGroup = document.createElement('div');
      
        optionValues.forEach(value => {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = value;
      
          const label = document.createElement('label');
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(value));
      
          checkBoxGroup.appendChild(label);
        });
      
        document.getElementById('formContainer')?.appendChild(checkBoxGroup);
        this.checkBox.push({head:label,options:optionValues})
      }
      
      
      this.hasContent = true
    })
  }

  save(){
    console.log("textBox",this.textBox,"  dropBox",this.dropBox, "  checkBox",this.checkBox);
    const formDate={
      formName:this.formname,
      textbox:this.textBox,
      dropBox:this.dropBox,
      checkBox:this.checkBox
    }
    this.service.createForm(formDate).subscribe((res)=>{
      this.toastr.success("done")
      this.router.navigate(['/forms']); 
    })
  
  }


}

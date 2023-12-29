import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFieldComponent } from '../create-field/create-field.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  
  constructor(
    private dialoge:MatDialog
  ){}

  allowDrop(ev:any) {
    ev.preventDefault();
  }

  drop(ev:any) {
    ev.preventDefault();
    let field= ev.dataTransfer.getData('text');
    let data={
      field:field
    }
    this.dialoge.open(CreateFieldComponent,{
      enterAnimationDuration: 1200,
      exitAnimationDuration: 1200,
      data: data
    })
  }

}

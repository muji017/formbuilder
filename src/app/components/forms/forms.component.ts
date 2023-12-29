import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  constructor(private dialog: MatDialog) {

  }
  create() {
    this.dialog.open(CreateDialogComponent, {
      enterAnimationDuration: 1200,
      exitAnimationDuration: 1200,
    })
  }

}

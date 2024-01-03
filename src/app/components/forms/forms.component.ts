import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { Store } from '@ngrx/store';
import { FormList, FormModel } from 'src/app/model/user.model';
import { deleteForm, getForms } from 'src/app/store/action';
import { getAllForms } from 'src/app/store/selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  subscriptions:Subscription[]=[]
  forms!:any
  constructor(
    private dialog: MatDialog,
    private store:Store<FormModel[]>
    ) {}

    ngOnInit(){
     this.getform()
    }
  getform(){
    this.store.dispatch(getForms())
     const getAllFormsSubscription=this.store.select(getAllForms).subscribe(
      (res)=>{
        this.forms=res[0] 
      }
     )
     this.subscriptions.push(getAllFormsSubscription)
  }
  create() {
    this.dialog.open(CreateDialogComponent, {
      enterAnimationDuration: 1200,
      exitAnimationDuration: 1200,
    })
  }
  delete(id:string){
    this.store.dispatch(deleteForm({id}))   
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub)=>{
      sub.unsubscribe()
    })
  }

}

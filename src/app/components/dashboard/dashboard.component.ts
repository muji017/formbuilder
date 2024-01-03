import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { getForms } from 'src/app/store/action';
import { getAllForms } from 'src/app/store/selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  subscriptions:Subscription[]=[]
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  forms!:any
  public barChartLabels: string[] = ['Formfields'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [0], label: 'textbox' },
    { data: [0], label: 'dropbox' },
    { data: [0], label: 'checkbox' }
  ];
  constructor(
    private store:Store
  ){}
  ngOnInit(){
    this.getform()
  }
  getform(){
    this.store.dispatch(getForms())
     const getAllFormsSubscription=this.store.select(getAllForms).subscribe(
      (res)=>{
        this.forms=res[0] 
        let textBoxCount=0
        let dropBoxCount=0
        let checkBoxCount=0
        this.forms.forEach((data:any)=>{
          console.log("hhh",data);
          textBoxCount+=data.textbox.length
          dropBoxCount+=data.dropBox.length
          checkBoxCount+=data.checkBox.length
        })
        this.barChartData = [
          { data: [textBoxCount], label: 'textbox' },
          { data: [dropBoxCount], label: 'dropbox' },
          { data: [checkBoxCount], label: 'checkbox' }
        ];
      }
     )
     this.subscriptions.push(getAllFormsSubscription)
  }
}

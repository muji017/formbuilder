import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {


  dragStartHandler(event: DragEvent,id:string): void {
    event.dataTransfer?.setData('text', id);
  }

  addTextField(){

  }
  addCheckBox(){

  }
  addDropBox(){
    
  }
}

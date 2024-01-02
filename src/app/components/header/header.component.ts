import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  smallView:boolean=false
  
  constructor(private router:Router){
       this.isLoginPage()
  }
  tog(){}
  isLoginPage(){
    return this.router.url=='/login'
  }
  onLogout(){
    localStorage.removeItem('user')
    window.location.reload()
  }
}

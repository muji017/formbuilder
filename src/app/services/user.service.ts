import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel, userModel } from '../model/user.model';
import { apiUrl } from './endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string=apiUrl
  constructor(
    private http:HttpClient
  ) { }

  login(email:string,password:string):Observable<userModel>{
    const payload={email,password}
    return this.http.post<userModel>(`${apiUrl}/login`,payload)
  }
  createForm(formModel:FormModel):Observable<any>{
      console.log(formModel)  

      return this.http.post<any>(`${apiUrl}/createForm`,formModel)
  }
}

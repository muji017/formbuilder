import { HttpClient, HttpParams } from '@angular/common/http';
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
  signUp(email:string,password:string):Observable<{message:string}>{
    const payload={email,password}
    return this.http.post<{message:string}>(`${apiUrl}/signUp`,payload)
}
  createForm(formModel:FormModel):Observable<{message:string}>{
      return this.http.post<{message:string}>(`${apiUrl}/createForm`,formModel)
  }
  getForms():Observable<FormModel[]>{
    return this.http.get<FormModel[]>(`${apiUrl}/getForms`)
  }
  deleteForm(id: string): Observable<FormModel[]> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<FormModel[]>(`${apiUrl}/deleteForm`, { params:params });
  }
  
}

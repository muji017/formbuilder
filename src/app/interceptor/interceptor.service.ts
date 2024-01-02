import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(
      private userservice: UserService
    ) { }
  
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const user: any = localStorage.getItem('user')
      if(user){
      const userparse = JSON.parse(user);
      const token = userparse?.token;
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(modifiedReq)
    }
    return next.handle(req)
}
}
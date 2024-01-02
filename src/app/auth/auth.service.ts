import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkLogin(): Observable<boolean> {
    const isLoggedIn = !!localStorage.getItem('user');

    return new Observable<boolean>((observer) => {
      observer.next(isLoggedIn);
      observer.complete();
    });
  }
}
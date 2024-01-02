import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./action";
import { catchError, map, mergeMap, of } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { TypedAction } from "@ngrx/store/src/models";
import { userModel } from "../model/user.model";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private actions$: Actions,
        private toastr: ToastrService,
        private router:Router
    ) { }
    loginStart$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(loginStart),
          mergeMap((action) => {
            return this.userService.login(action.email, action.password).pipe(
              map((data) => {
                console.log("ddddddddddd", data);
                localStorage.setItem('user', JSON.stringify(data));
                this.toastr.success("Login successfuly")
                this.router.navigate(['/dashboard'])
                return loginSuccess();
              }),
              catchError((error) => {
                this.toastr.error(error.error.message)
                return of(this.loginFailureAction());
              })
            );
          })
        );
      });
      private loginFailureAction(): TypedAction<string> {
        return { type: '[User] Login Failure' };
      }
}
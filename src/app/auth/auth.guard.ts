import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import {Observable, map} from "rxjs"
import { AuthService } from "./auth.service";

export const HomeAuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkLogin().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          router.navigate(['/login']);
          return false;
        }
      })
    );
  };

  export const LoginAuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkLogin().pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          return true;
        } else {
          router.navigate(['/dashboard']);
          return false;
        }
      })
    );
  };
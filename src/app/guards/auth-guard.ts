import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import { AuthService } from "../services/auth-service";
/**
 * Angular guard runs before running the code
 * Useful to check if route is accessible or not or intercepting requests.
 * This is also a "service"
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // check if user is logged in or not
    // check if user is authorized or not
    // intercepting of requests can be implemented via this guard.
    return this.authService.isAuthenticated()
      .then((authenticated: any) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']); // redirect to home page.
          return false;
        }
      });
  }
}

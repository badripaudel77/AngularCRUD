import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

/**
 * Interceptors can perform a variety of implicit tasks, from authentication to logging, in a routine, standard way, for every HTTP request/response.
 * Most interceptors transform the outgoing request before passing it to the next interceptor in the chain, by calling next.handle(transformedReq).
 * https://angular.io/guide/http-interceptor-use-cases
 * https://angular.io/api/common/http/HttpInterceptor#description
 */
@Injectable()
export class MyInterceptor implements HttpInterceptor {
  // Use constructor DI
  private authService: AuthService;
  constructor(authService: AuthService) {
     this.authService = authService;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization
    // modify the request using interceptor, add the demo token
    // request => original request, clonedRequest => modified request.
    const token = this.authService.getAuthorizationToken();
    const clonedRequest = request.clone({
      headers: request.headers.set('Authorization', token.toString())
    });
    return next.handle(clonedRequest);
  }
}

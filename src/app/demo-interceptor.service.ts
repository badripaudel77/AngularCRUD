import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class DemoInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting the request which is on its onw way.")
    /**
     * If next.handle() is used, it lets request to go, otherwise it might break the app.
     */
    const clonedRequest = req.clone({ headers: req.headers.append("X-Auth", "authentication-key-goes-here")});
    //return next.handle(req);
    return next.handle(clonedRequest);
  }

}

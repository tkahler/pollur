import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // if request has 'skipBearer' header will skip adding the bearer token
    const authToken = this.auth.getAuthToken();

    if (req.headers.has('skipBearer')) {
      req.headers.delete('skipBearer');
      return next.handle(req);
    }

    // if auth token was never set skip adding the bearer token
    if (!authToken) {
      return next.handle(req);
    }
    // Get the auth token from the service.

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

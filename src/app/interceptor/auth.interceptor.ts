import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginSerive:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("auth interceptor is calling")
    let newRequest=request;
    let token=this.loginSerive.getToken();
    if(token!=null){
      console.log("token is not null in Auth interceptor");

      newRequest=newRequest.clone(
        {
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }

      );
      console.log("old request is ");
      console.log(request);
      console.log("new request is ");
      console.log(newRequest);
    }
    
    return next.handle(newRequest);
  }
}

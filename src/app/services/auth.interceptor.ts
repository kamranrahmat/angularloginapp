import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable,Injector } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private injector:Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest=req;
         

    let lgServiceObj=this.injector.get(LoginService)
    let token =lgServiceObj.getToken();
    console.log("Auth Service is calling")
    if(token!=null){
        req=newRequest.clone({
            setHeaders:{
                Authorization:`Bearer ${token}`
            }
        }
        );
    }
    
        return next.handle(req);
    }

}
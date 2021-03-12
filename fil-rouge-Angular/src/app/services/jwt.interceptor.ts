import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;

    const token = this.token.getToken();

    if (token!= null) {
      const tokenValue = (JSON.parse(token))['token'];
      authReq = req.clone({ 
        setHeaders: {
          Authorization: `Bearer ${tokenValue}`
        }
        // headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token) 
      });
    }
    
    return next.handle(authReq);
  }
}

export const JwtInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
];
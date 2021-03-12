import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Promo } from '../promo/promo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Promo[]> {
    return this.httpClient.get<Promo[]>('')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(promo): Observable<Promo> {
    return this.httpClient.post<Promo>(environment.apiUrl + '', JSON.stringify(promo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  getOne(id): Observable<Promo> {
    return this.httpClient.get<Promo>(environment.apiUrl + '' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, promo): Observable<Promo> {
    return this.httpClient.put<Promo>(environment.apiUrl + '' + id, JSON.stringify(promo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Promo>(environment.apiUrl + '' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}

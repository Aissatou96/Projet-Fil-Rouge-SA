import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Referentiel } from '../referentiel/referentiel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Referentiel[]> {
    return this.httpClient.get<Referentiel[]>('api/admin/referentiels')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(ref): Observable<Referentiel> {
    return this.httpClient.post<Referentiel>(environment.apiUrl + '/admin/referentiels', JSON.stringify(ref), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  getOne(id): Observable<Referentiel> {
    return this.httpClient.get<Referentiel>(environment.apiUrl + '/admin/referentiels/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, ref): Observable<Referentiel> {
    return this.httpClient.put<Referentiel>(environment.apiUrl + '/admin/referentiels/' + id, JSON.stringify(ref), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Referentiel>(environment.apiUrl + '/admin/referentiels/' + id, this.httpOptions)
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

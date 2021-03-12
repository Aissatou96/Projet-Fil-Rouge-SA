import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Profil } from '../profils/profil';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Profil[]> {
    return this.httpClient.get<Profil[]>('/api/admin/profils?archive=0')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(profil): Observable<Profil> {
    return this.httpClient.post<Profil>(environment.apiUrl + '/admin/profils', JSON.stringify(profil), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  getOne(id): Observable<Profil> {
    return this.httpClient.get<Profil>(environment.apiUrl + '/admin/profils/' + id);
  }
   
  update(id, profil): Observable<Profil> {
    return this.httpClient.put<Profil>(environment.apiUrl + '/admin/profils/' + id , JSON.stringify(profil), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Profil>(environment.apiUrl + '/admin/profils/' + id, this.httpOptions)
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

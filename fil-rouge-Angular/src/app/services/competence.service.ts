import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Competence } from '../competences/competence';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>('/admin/competences')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(user): Observable<Competence> {
    return this.httpClient.post<Competence>(environment.apiUrl + '/admin/competences', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  getOne(id): Observable<Competence> {
    return this.httpClient.get<Competence>(environment.apiUrl + '/admin/competences' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, user): Observable<Competence> {
    return this.httpClient.put<Competence>(environment.apiUrl + '/admin/competences' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Competence>(environment.apiUrl + '/admin/competences' + id, this.httpOptions)
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

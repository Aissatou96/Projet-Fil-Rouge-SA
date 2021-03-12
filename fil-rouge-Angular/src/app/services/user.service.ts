import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../user/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/admin/users?archive=0')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(user): Observable<User> {
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/admin/users', user);
  }  
   
  getOne(id): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + '/admin/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id: number, user: any): Observable<any> {
    return this.httpClient.put<any>(environment.apiUrl + '/admin/users/' + id,user);
  }
   
  delete(id){
    return this.httpClient.delete<User>(environment.apiUrl + '/admin/users/' + id, this.httpOptions)
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

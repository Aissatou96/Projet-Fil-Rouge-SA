import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProfilSortie } from '../profils-sortie/profil-sortie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ProfilSortie[]> {
    return this.httpClient.get<ProfilSortie[]>(environment.apiUrl + '/admin/profils_sortie?archive=0');
   
  }
   
  create(profilS): Observable<ProfilSortie> {
    return this.httpClient.post<ProfilSortie>(environment.apiUrl + '/admin/profils_sortie', JSON.stringify(profilS), this.httpOptions)
    
  }  
   
  getOne(id): Observable<ProfilSortie> {
    return this.httpClient.get<ProfilSortie>(environment.apiUrl + '/admin/profils_sortie/' + id);
    
  }
   
  update(id, profilS): Observable<ProfilSortie> {
    return this.httpClient.put<ProfilSortie>(environment.apiUrl + '/admin/profils_sortie/' + id, JSON.stringify(profilS), this.httpOptions)
    
  }
   
  delete(id){
    return this.httpClient.delete<ProfilSortie>(environment.apiUrl + '/admin/profils_sortie/' + id, this.httpOptions)
    
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

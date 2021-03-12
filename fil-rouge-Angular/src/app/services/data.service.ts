import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected url:string, protected http : HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  create(ressource){
    return this.http.post(this.url, JSON.stringify(ressource));
  }

  update(ressource){
    return this.http.put(this.url, JSON.stringify(ressource));
  }

  delete(id){
    return this.http.delete(this.url + '/' +id);
  }
}

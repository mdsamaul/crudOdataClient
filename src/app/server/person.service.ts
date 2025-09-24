import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  private baseUrl ='http://127.0.0.1:8000/odata/people';
  //people 
  people():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
  //person
  person(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  //addPerson
  addPerson(person:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, person);
  }
  //updatePerson
  updatePerson(id:number, person:any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, person);
  }
  //deletePerson
  deletePerson(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}

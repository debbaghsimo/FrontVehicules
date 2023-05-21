import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/time";

  ajouter(time:Time):Observable<Time>{
   return this.httpClient.post<Time>(this.url+'/add',time);
  }

  show(id:number):Observable<Time>{
    return this.httpClient.get<Time>(this.url+"/"+id);
  }

  getTime():Observable<Time[]>{
    return this.httpClient.get<Time[]>(this.url);
  }

  deleteTime(id:number):Observable<Time>{
    return this.httpClient.delete<Time>(this.url+"/"+id);
  }
  modifier(time:Time):Observable<Time>{
    return this.httpClient.put<Time>(this.url+'/update',time);
  }
}


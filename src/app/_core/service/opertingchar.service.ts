import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opertingchar } from '../model/opertingchar';

@Injectable({
  providedIn: 'root'
})
export class OpertingcharService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/operting";

  ajouter(opertingchar:Opertingchar):Observable<Opertingchar>{
   return this.httpClient.post<Opertingchar>(this.url+'/add',opertingchar);
  }

  show(id:number):Observable<Opertingchar>{
    return this.httpClient.get<Opertingchar>(this.url+"/"+id);
  }

  getOpertingchar():Observable<Opertingchar[]>{
    return this.httpClient.get<Opertingchar[]>(this.url);
  }

  deleteOpertingchar(id:number):Observable<Opertingchar>{
    return this.httpClient.delete<Opertingchar>(this.url+"/"+id);
  }

modifier(operetingchar:Opertingchar):Observable<Opertingchar>{
  return this.httpClient.put<Opertingchar>(this.url+'/update',operetingchar);
   }
}

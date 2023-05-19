import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opertingchar } from '../model/opertingchar';

@Injectable({
  providedIn: 'root'
})
export class OpertingcharService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/Gestion/admin/opertingchar";

  ajouter(opertingchar:Opertingchar):Observable<Opertingchar>{
   return this.httpClient.post<Opertingchar>(this.url+'/add',opertingchar);
  }

  show(id:number):Observable<Opertingchar>{
    return this.httpClient.get<Opertingchar>(this.url+"/"+id);
  }

  getPatient():Observable<Opertingchar[]>{
    return this.httpClient.get<Opertingchar[]>(this.url);
  }

  deketPatient(id:number):Observable<Opertingchar>{
    return this.httpClient.delete<Opertingchar>(this.url+"/"+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Engine } from '../model/engine';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/engine";

  ajouter(engine:Engine):Observable<Engine>{
   return this.httpClient.post<Engine>(this.url+'/add',engine);
  }

  modifier(engine:Engine):Observable<Engine>{
    return this.httpClient.put<Engine>(this.url+'/update',engine);
   }

  show(id:number):Observable<Engine>{
    return this.httpClient.get<Engine>(this.url+"/"+id);
  }

  getAll():Observable<Engine[]>{
    return this.httpClient.get<Engine[]>(this.url);
  }

  delete(id:number):Observable<Engine>{
    return this.httpClient.delete<Engine>(this.url+"/"+id);
  }
}

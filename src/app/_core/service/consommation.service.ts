import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consommation } from '../model/consommation';

@Injectable({
  providedIn: 'root'
})
export class ConsommationService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/Gestion/admin/consommation";

  ajouter(consommation:Consommation):Observable<Consommation>{
   return this.httpClient.post<Consommation>(this.url+'/add',consommation);
  }

  show(id:number):Observable<Consommation>{
    return this.httpClient.get<Consommation>(this.url+"/"+id);
  }

  getPatient():Observable<Consommation[]>{
    return this.httpClient.get<Consommation[]>(this.url);
  }

  deketPatient(id:number):Observable<Consommation>{
    return this.httpClient.delete<Consommation>(this.url+"/"+id);
  }
}

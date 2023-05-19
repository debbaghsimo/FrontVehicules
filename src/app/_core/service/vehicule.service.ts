import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../model/vehicule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/Gestion/admin/vehicule";

  ajouter(vehicule:Vehicule):Observable<Vehicule>{
   return this.httpClient.post<Vehicule>(this.url+'/add',vehicule);
  }

  show(id:number):Observable<Vehicule>{
    return this.httpClient.get<Vehicule>(this.url+"/"+id);
  }

  getPatient():Observable<Vehicule[]>{
    return this.httpClient.get<Vehicule[]>(this.url);
  }

  deketPatient(id:number):Observable<Vehicule>{
    return this.httpClient.delete<Vehicule>(this.url+"/"+id);
  }
}

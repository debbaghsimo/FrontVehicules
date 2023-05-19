import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/Gestion/admin/utilisateur";

  ajouter(utilisateur:Utilisateur):Observable<Utilisateur>{
   return this.httpClient.post<Utilisateur>(this.url+'/add',utilisateur);
  }

  show(id:number):Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>(this.url+"/"+id);
  }

  getPatient():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(this.url);
  }

  deketPatient(id:number):Observable<Utilisateur>{
    return this.httpClient.delete<Utilisateur>(this.url+"/"+id);
  }
}

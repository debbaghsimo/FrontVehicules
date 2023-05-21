import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient :HttpClient) { }

  public url:string = "http://localhost:8181/utilisateur";

  getUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(this.url,utilisateur);
  }

  authentification(username:string):Observable<boolean>{
      localStorage.setItem("username",username);
      return of(true);
  }

  isAuthentification(){
    return localStorage.getItem("username") != null;
  }

  logout():Observable<boolean>{
    localStorage.clear();
    return of(true);
  }
}

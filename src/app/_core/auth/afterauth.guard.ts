import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../service/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AfterauthGuard implements CanActivate {
  constructor(private utilisateurservice:UtilisateurService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.utilisateurservice.isAuthentification()){
        this.router.navigateByUrl("/Gestion/admin/dashboard");
        return false;
      }
     return true;
  }

}

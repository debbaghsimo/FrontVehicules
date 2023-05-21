import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/_core/service/utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private utilisateur:UtilisateurService,private router:Router){

  }
  logout(){
    this.utilisateur.logout().subscribe({next:(data:boolean)=>{
      this.router.navigateByUrl("/Gestion/login");
    }});
  }
}

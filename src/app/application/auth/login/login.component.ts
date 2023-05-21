import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/_core/model/utilisateur';
import { UtilisateurService } from 'src/app/_core/service/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg = ''
  utilisateur:Utilisateur|any =null;
  id:number|any =null;

  constructor(private fb:FormBuilder,private utilisateurService: UtilisateurService,private router:Router,private activeRouter: ActivatedRoute) { }

  registerform!:FormGroup
  ngOnInit() :void{
    this.createform();
  }

  createform(){
    this.registerform = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  logincheck(username:string){
      this.utilisateurService.authentification(username).subscribe(res=>{
        this.router.navigate(['/Gestion/admin/dashboard']);
      });
  }

  login() {
    this.utilisateur={
      username:this.registerform.value['username'],
      password:this.registerform.value['password']
    }
    this.utilisateurService.getUtilisateur(this.utilisateur).subscribe(res=>{
      if(res != null){
      this.logincheck(res.username);
      }else{
        this.msg = 'Username or password is incorrect'
        this.router.navigate(['/Gestion/login']);
      }

    });
  }
}










import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { UtilisateurlistComponent } from './utilisateurlist/utilisateurlist.component';
import { UtilisateurcreateComponent } from './utilisateurcreate/utilisateurcreate.component';


@NgModule({
  declarations: [
    UtilisateurlistComponent,
    UtilisateurcreateComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    SharedModule
  ]
})
export class UtilisateurModule { }

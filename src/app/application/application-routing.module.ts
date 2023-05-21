import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterpageComponent } from '../_shared/component/masterpage/masterpage.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthentificationGuard } from '../_core/auth/authentification.guard';
import { AfterauthGuard } from '../_core/auth/afterauth.guard';

const routes: Routes = [
  {
    path: '',
    component:MasterpageComponent,
    children:
    [
      {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canActivate:[AuthentificationGuard]

      },
    ]
  },{
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[AfterauthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:"/Gestion/admin/dashboard",
    pathMatch: "full"
  },
  {
    path: 'Gestion',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
  },
  {
    path: '**',
    redirectTo:"/Gestion/admin/dashboard",
    pathMatch: "full"
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

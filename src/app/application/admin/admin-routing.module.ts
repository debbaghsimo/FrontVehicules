import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
      path: 'consommation',
      loadChildren: () => import('./consommation/consommation.module').then(m => m.ConsommationModule),
    },
    {
      path: 'engine',
      loadChildren: () => import('./engine/engine.module').then(m => m.EngineModule),
    },
    {
      path: 'opertingchar',
      loadChildren: () => import('./opertingchar/opertingchar.module').then(m => m.OpertingcharModule),
    },
    {
      path: 'time',
      loadChildren: () => import('./time/time.module').then(m => m.TimeModule),
    },
    {
      path: 'utilisateur',
      loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule),
    },
    {
      path: 'vehicule',
      loadChildren: () => import('./vehicule/vehicule.module').then(m => m.VehiculeModule),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

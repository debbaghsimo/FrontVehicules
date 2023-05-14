import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterpageComponent } from '../_shared/component/masterpage/masterpage.component';

const routes: Routes = [
  {
    path: '',
    component:MasterpageComponent,
    children:
    [
      {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

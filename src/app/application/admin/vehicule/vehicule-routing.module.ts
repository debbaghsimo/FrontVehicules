import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculecreateComponent } from './vehiculecreate/vehiculecreate.component';
import { VehiculelistComponent } from './vehiculelist/vehiculelist.component';

const routes: Routes = [{
  path: '',
  component:VehiculelistComponent,
},{
  path: 'add',
  component:VehiculecreateComponent,
},{
  path: 'edit/:id',
  component:VehiculecreateComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }

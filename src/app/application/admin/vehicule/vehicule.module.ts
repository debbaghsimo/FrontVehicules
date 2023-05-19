import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { VehiculelistComponent } from './vehiculelist/vehiculelist.component';
import { VehiculecreateComponent } from './vehiculecreate/vehiculecreate.component';


@NgModule({
  declarations: [
    VehiculelistComponent,
    VehiculecreateComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    SharedModule
  ]
})
export class VehiculeModule { }

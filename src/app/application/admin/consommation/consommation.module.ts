import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommationRoutingModule } from './consommation-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ConsommationlistComponent } from './consommationlist/consommationlist.component';
import { ConsommationcreateComponent } from './consommationcreate/consommationcreate.component';


@NgModule({
  declarations: [
    ConsommationlistComponent,
    ConsommationcreateComponent
  ],
  imports: [
    CommonModule,
    ConsommationRoutingModule,
    SharedModule
  ]
})
export class ConsommationModule { }

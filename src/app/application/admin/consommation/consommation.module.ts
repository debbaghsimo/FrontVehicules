import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommationRoutingModule } from './consommation-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { ConsommationlistComponent } from './consommationlist/consommationlist.component';
import { ConsommationcreateComponent } from './consommationcreate/consommationcreate.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsommationlistComponent,
    ConsommationcreateComponent
  ],
  imports: [
    CommonModule,
    ConsommationRoutingModule,
    SharedModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConsommationModule { }

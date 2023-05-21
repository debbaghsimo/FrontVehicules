import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineRoutingModule } from './engine-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { EnginecreateComponent } from './enginecreate/enginecreate.component';
import { EnginelistComponent } from './enginelist/enginelist.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnginecreateComponent,
    EnginelistComponent
  ],
  imports: [
    CommonModule,
    EngineRoutingModule,
    SharedModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EngineModule { }

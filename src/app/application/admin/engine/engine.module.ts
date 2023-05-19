import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineRoutingModule } from './engine-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { EnginecreateComponent } from './enginecreate/enginecreate.component';
import { EnginelistComponent } from './enginelist/enginelist.component';


@NgModule({
  declarations: [
    EnginecreateComponent,
    EnginelistComponent
  ],
  imports: [
    CommonModule,
    EngineRoutingModule,
    SharedModule
  ]
})
export class EngineModule { }

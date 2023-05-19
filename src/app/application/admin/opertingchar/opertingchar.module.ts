import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpertingcharRoutingModule } from './opertingchar-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { OpertingcharcreateComponent } from './opertingcharcreate/opertingcharcreate.component';
import { OpertingcharlistComponent } from './opertingcharlist/opertingcharlist.component';


@NgModule({
  declarations: [
    OpertingcharcreateComponent,
    OpertingcharlistComponent
  ],
  imports: [
    CommonModule,
    OpertingcharRoutingModule,
    SharedModule
  ]
})
export class OpertingcharModule { }

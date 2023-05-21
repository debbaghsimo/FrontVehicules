import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRoutingModule } from './time-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { TimelistComponent } from './timelist/timelist.component';
import { TimecreateComponent } from './timecreate/timecreate.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimelistComponent,
    TimecreateComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    SharedModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TimeModule { }

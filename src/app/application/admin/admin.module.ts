import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';


@NgModule({
  declarations: [
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

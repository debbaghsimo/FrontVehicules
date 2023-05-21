import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelistComponent } from './timelist/timelist.component';
import { TimecreateComponent } from './timecreate/timecreate.component';

const routes: Routes = [{
  path: '',
  component:TimelistComponent,
},{
  path: 'add',
  component:TimecreateComponent,
},{
  path: 'edit/:id',
  component:TimecreateComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }

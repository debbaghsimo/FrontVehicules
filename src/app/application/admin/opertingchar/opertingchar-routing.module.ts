import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpertingcharlistComponent } from './opertingcharlist/opertingcharlist.component';
import { OpertingcharcreateComponent } from './opertingcharcreate/opertingcharcreate.component';

const routes: Routes = [{
  path: '',
  component:OpertingcharlistComponent,
},{
  path: 'add',
  component:OpertingcharcreateComponent,
},{
  path: 'edit/:id',
  component:OpertingcharcreateComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpertingcharRoutingModule { }

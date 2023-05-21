import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnginelistComponent } from './enginelist/enginelist.component';
import { EnginecreateComponent } from './enginecreate/enginecreate.component';

const routes: Routes = [{
  path: '',
  component:EnginelistComponent,
},{
  path: 'add',
  component:EnginecreateComponent,
},
{
  path: 'edit/:id',
  component:EnginecreateComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineRoutingModule { }

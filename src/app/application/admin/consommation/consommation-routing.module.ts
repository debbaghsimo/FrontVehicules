import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsommationlistComponent } from './consommationlist/consommationlist.component';
import { ConsommationcreateComponent } from './consommationcreate/consommationcreate.component';

const routes: Routes = [{
  path: '',
  component:ConsommationlistComponent,
},{
  path: 'add',
  component:ConsommationcreateComponent,
},
{
  path: 'edit/:id',
  component:ConsommationcreateComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommationRoutingModule { }

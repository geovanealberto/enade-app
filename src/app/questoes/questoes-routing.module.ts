import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestoesFormComponent} from './questoes-form/questoes-form.component';
import { QuestoesListaComponent } from './questoes-lista/questoes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: 'questoes', component: LayoutComponent,
  canActivate: [AuthGuard] ,children: [

  { path:'form',component: QuestoesFormComponent},
  { path:'form/:id',component: QuestoesFormComponent},
  { path:'lista',component: QuestoesListaComponent},
  { path:'',redirectTo:'/questoes/lista', pathMatch:'full'}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestoesRoutingModule { }

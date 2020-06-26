import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProvasFormComponent} from './provas-form/provas-form.component';
import { ProvasListaComponent } from './provas-lista/provas-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'provas', component: LayoutComponent,
  canActivate: [AuthGuard] ,children: [

  { path:'form',component: ProvasFormComponent},
  { path:'form/:id',component: ProvasFormComponent},
  { path:'lista',component: ProvasListaComponent},
  { path:'',redirectTo:'/provas/lista', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProvasRoutingModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResultadosFormComponent} from './resultados-form/resultados-form.component';
import { ResultadosListaComponent } from './resultados-lista/resultados-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'resultados', component: LayoutComponent,
  canActivate: [AuthGuard] ,children: [

  { path:'form',component: ResultadosFormComponent},
  { path:'form/:id',component: ResultadosFormComponent},
  { path:'lista',component: ResultadosListaComponent},
  { path:'',redirectTo:'/resultados/lista', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class resultadosRoutingModule { }



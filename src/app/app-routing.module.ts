import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from  './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {AuthGuard} from './auth.guard';
import { UsuariosListaComponent } from './usuarios/usuarios-lista/usuarios-lista.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: LayoutComponent, children: [
    { path : 'home', component: HomeComponent, canActivate : [AuthGuard] },
    { path: '' , redirectTo: '/home', pathMatch: 'full' },
    { path : 'graficos', component: BarChartComponent, canActivate : [AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

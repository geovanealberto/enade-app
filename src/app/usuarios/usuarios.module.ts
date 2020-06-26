import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { usuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';


@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListaComponent
  ],

  imports: [
    CommonModule,
    usuariosRoutingModule,
    FormsModule
    

  ], exports:[
    UsuariosFormComponent,
    UsuariosListaComponent
]
})
export class UsuariosModule { }

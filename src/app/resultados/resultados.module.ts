import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { resultadosRoutingModule } from './resultados-routing.module';
import { ResultadosFormComponent} from './resultados-form/resultados-form.component';
import { ResultadosListaComponent } from './resultados-lista/resultados-lista.component';


@NgModule({
  declarations: [
    ResultadosFormComponent,
    ResultadosListaComponent
  ],

  imports: [
    CommonModule,
    resultadosRoutingModule,
    FormsModule


  ], exports:[
    ResultadosFormComponent,
    ResultadosListaComponent
]
})
export class ResultadosModule { }

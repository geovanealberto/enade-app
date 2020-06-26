import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { QuestoesRoutingModule } from './questoes-routing.module';
import { QuestoesFormComponent } from './questoes-form/questoes-form.component';
import { QuestoesListaComponent } from './questoes-lista/questoes-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    QuestoesFormComponent,
    QuestoesListaComponent],
  imports: [
    CommonModule,
    QuestoesRoutingModule,
    FormsModule

  ], exports : [
    QuestoesFormComponent,
    QuestoesListaComponent
  ]
})
export class QuestoesModule { }

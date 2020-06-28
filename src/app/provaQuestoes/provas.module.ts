import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { ProvasRoutingModule } from './provas-routing.module';
import { ProvasFormComponent} from './provas-form/provas-form.component';
import { ProvasListaComponent } from './provas-lista/provas-lista.component';


@NgModule({
  declarations: [
    ProvasFormComponent,
    ProvasListaComponent
  ],

  imports: [
    CommonModule,
    ProvasRoutingModule,
    FormsModule


  ], exports:[
    ProvasFormComponent,
    ProvasListaComponent
]
})
export class ProvasModule { }

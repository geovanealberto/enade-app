import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import {UsuariosService} from './usuarios.service'
import { QuestoesModule} from './questoes/questoes.module';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { LayoutComponent } from './layout/layout.component';
import { QuestoesService } from './questoes.service';
import { ResultadosModule } from './resultados/resultados.module';
import { ProvaService } from './prova.service';
import { ResultadosService } from './resultados.service';
import {ProvasModule} from './prova/provas.module'
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    BarChartComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UsuariosModule,
    QuestoesModule,
    ResultadosModule,
    ProvasModule,
    FormsModule,
    ChartsModule

  ],

  providers: [
    UsuariosService,
    QuestoesService,
    ProvaService,
    ResultadosService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

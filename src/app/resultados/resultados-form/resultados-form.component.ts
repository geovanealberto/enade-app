import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Resultado } from '../resultado'
import {ResultadosService} from '../../resultados.service'
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/usuarios/usuario';
import {UsuariosService} from '../../usuarios.service'
import { ProvaService } from 'src/app/prova.service';
import { Prova } from 'src/app/prova/prova';


@Component({
  selector: 'app-resultados-form',
  templateUrl: './resultados-form.component.html',
  styleUrls: ['./resultados-form.component.css']
})
export class ResultadosFormComponent implements OnInit {

resultadoService
resultado: Resultado;
success:boolean = false;
errors: String[];
id:number;
value:number;

  constructor(
    //private usuarioService:UsuariosService,
    //private provaService:ProvaService,

    private service:ResultadosService,
    private router:Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.resultado = new Resultado();

  }

  ngOnInit(): void {

    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe (urlParams =>{
      this.id = urlParams['id'];

      if (this.id){
        this.service
        .getResultadoById(this.id)
        .subscribe(
          response => this.resultado = response ,
          errorResponse => this.resultado = new Resultado())
          console.log("id",this.id);
      }
    })
  }


  voltarParaListagem(){
    this.router.navigate(['/resultados/lista'])
  }



  onSubmit(){
    console.log("resultado",this.resultado);
    if (this.id){
      this.service
      .atualizar(this.resultado)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
        this.errors = ['Erro ao atualizar o resultado.']
      })

    }else{

    this.service
    .salvar(this.resultado)
    .subscribe ( response =>{
      this.success = true;
      this.errors = null;
      this.resultado = response;
    }, errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
      })
    }
  }


  imprimeRelatorio(){
    return this.resultadoService.donwloadRelatorio();
  }
}

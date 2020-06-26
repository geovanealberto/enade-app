import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Questao } from '../questao'
import {QuestoesService} from '../../questoes.service'

import { Observable } from 'rxjs';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-questoes-form',
  templateUrl: './questoes-form.component.html',
  styleUrls: ['./questoes-form.component.css']
})
export class QuestoesFormComponent implements OnInit {


questao: Questao;
success:boolean = false;
errors: String[];
id:number;
value:number;


  constructor(

    private service:QuestoesService,
    private router:Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.questao = new Questao();
  }

  ngOnInit(): void {


    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe (urlParams =>{
      this.id = urlParams['id'];

      if (this.id){
      this.service
      .getQuestoesById(this.id)
      .subscribe(
        response => this.questao = response ,
        errorResponse => this.questao = new Questao()
      )
    }
    })
  }





  voltarParaListagem(){
    this.router.navigate(['/questoes/lista'])
  }

  limparCampos(){
    if (this.questao.idTipoQuestao == 2){

      this.questao.alternativaA="";
      this.questao.alternativaB="";
      this.questao.alternativaC="";
      this.questao.alternativaD="";
      this.questao.alternativaE="";
      this.questao.alternativaCorreta="";
    }
  }

  onSubmit(){
    if (this.id){
      this.service
      .atualizar(this.questao)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
        this.errors = ['Erro ao atualizar a questao.']
      })

    }else{

    this.service
    .salvar(this.questao)
    .subscribe ( response =>{
      this.success = true;
      this.errors = null;
      this.questao = response;
    }, errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
      })
    }
  }
}

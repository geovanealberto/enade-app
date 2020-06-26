import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Questao} from '../questao';
//import { TipoUsuario} from '../tipoUsuario';
import { QuestoesService } from '../../questoes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgModel } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-questoes-lista',
  templateUrl: './questoes-lista.component.html',
  styleUrls: ['./questoes-lista.component.css']
})
export class QuestoesListaComponent implements OnInit {


  questoes:Questao[] = [];
  //tipoUsuario:TipoUsuario[] = [];
  //usuarioSelecionado : Usuario;
  mensagemSucesso: string;
  mensagemErro:string;


  constructor(
    private service: QuestoesService,
    private router:Router) { }

  ngOnInit(): void {
    this.service
    .getQuestoes()
    .subscribe(resposta => this.questoes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/questoes/form'])
  }

  
}

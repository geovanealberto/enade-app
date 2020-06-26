import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Prova} from '../prova';
import { ProvaService } from '../../prova.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-provas-lista',
  templateUrl: './provas-lista.component.html',
  styleUrls: ['./provas-lista.component.css']
})
export class ProvasListaComponent implements OnInit {

  provas:Prova[] = [];
  provaSelecionado : Prova;
  mensagemSucesso: string;
  mensagemErro:string;



  constructor(
    private service: ProvaService,
    private router:Router) { }

  ngOnInit(): void {
    this.service
    .getProva()
    .subscribe(resposta => this.provas = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/provas/form'])
  }
  preparaDelecao(prova:Prova){
    this.provaSelecionado = prova;

  }

  deletarProva(){
    this.service
    .deletar(this.provaSelecionado)
    .subscribe(
    response => {
      this.mensagemSucesso = 'Prova Deletada com sucesso!'
      this.ngOnInit();
    },
    erro =>this.mensagemErro = 'ocorreu um erro ao deletar resultado.'

    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Resultado} from '../resultado';
import { ResultadosService } from '../../resultados.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Prova } from 'src/app/prova/prova';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-resultados-lista',
  templateUrl: './resultados-lista.component.html',
  styleUrls: ['./resultados-lista.component.css']
})
export class ResultadosListaComponent implements OnInit {

  resultadoService
  usuarios:Usuario[] = [];
  resultados:Resultado[] = [];
  resultadoSelecionado : Resultado;
  mensagemSucesso: string;
  mensagemErro:string;



  constructor(
    private service: ResultadosService,
    private router:Router) { }

  ngOnInit(): void {
    this.service
    .getResultados()
    .subscribe(resposta => this.resultados = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/resultados/form'])
  }

  preparaDelecao(resultado:Resultado){
    this.resultadoSelecionado = resultado;

  }

  deletarResultado(){
    this.service
    .deletar(this.resultadoSelecionado)
    .subscribe(
    response => {
      this.mensagemSucesso = 'Resultado Deletado com sucesso!'
      this.ngOnInit();
    },
    erro =>this.mensagemErro = 'ocorreu um erro ao deletar resultado.'

    )
  }

  imprimeRelatorio(){
    this.service.downloadRelatorio();
  }
}

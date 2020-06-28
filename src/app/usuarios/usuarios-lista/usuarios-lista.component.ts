import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Usuario} from '../usuario';
//import { TipoUsuario} from '../tipoUsuario';
import { UsuariosService } from '../../usuarios.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarioService
  usuarios:Usuario[] = [];
  //tipoUsuario:TipoUsuario[] = [];
  usuarioSelecionado : Usuario;
  mensagemSucesso: string;
  mensagemErro:string;



  constructor(
    private service: UsuariosService,
    private router:Router) { }

  ngOnInit(): void {
    this.service
    .getUsuarios()
    .subscribe(resposta => this.usuarios = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/usuarios/form'])
  }

  preparaDelecao(usuario:Usuario){
    this.usuarioSelecionado = usuario;

  }

  deletarUsuario(){
    this.service
    .deletar(this.usuarioSelecionado)
    .subscribe(
    response => {
      this.mensagemSucesso = 'Usuario Deletado com sucesso!'
      this.ngOnInit();
    },
    erro =>this.mensagemErro = 'ocorreu um erro ao deletar usuario.'

    )
  }

  imprimeRelatorioUsuario(){
    this.service.downloadRelatorioUsuario();
  }
}

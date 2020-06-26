import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Convidado} from './convidado';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso:string;
  errors:String[];


  constructor(
    private router:Router,
    private authService : AuthService
  ) {  }

  onSubmit(){

    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response=> {
            const access_token = JSON.stringify(response);
            localStorage.setItem('access_token',access_token)
          this.router.navigate(['/home'])
        }, errorResponse => {
          this.errors = ['Usuario e/ou senha incorreto(s).']
        })
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando=true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const convidado: Convidado = new Convidado();
    convidado.username = this.username;
    convidado.password = this.password;
    this.authService
        .salvar(convidado)
        .subscribe( response =>{
          this.mensagemSucesso = "Cadastro efetuado com sucesso, efetue o Login.";
          this.cadastrando = false;
          this.username ='';
          this.password ='';
          this.errors=[]
        }, errorResponse =>{
          this.mensagemSucesso = null;
          this.errors = errorResponse.error.errors;
        })
  }

}

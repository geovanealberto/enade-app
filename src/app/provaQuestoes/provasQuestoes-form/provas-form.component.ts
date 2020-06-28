import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Prova } from '../prova'
import {ProvaService} from '../../prova.service'
import { Observable } from 'rxjs';
//import { Usuario } from 'src/app/usuarios/usuario';
//import {UsuariosService} from '../../usuarios.service'


@Component({
  selector: 'app-provas-form',
  templateUrl: './provas-form.component.html',
  styleUrls: ['./provas-form.component.css']
})
export class ProvasFormComponent implements OnInit {



//usuarios: Usuario[] = []
prova: Prova;
success:boolean = false;
errors: String[];
id:number;
value:number;

  constructor(
    //private usuarioService:UsuariosService,
    private service:ProvaService,
    private router:Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.prova = new Prova();

  }

  ngOnInit(): void {


    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe (urlParams =>{
      this.id = urlParams['id'];

      if (this.id){
        this.service
        .getProvaById(this.id)
        .subscribe(
          response => this.prova = response ,
          errorResponse => this.prova = new Prova())
          console.log("id",this.id);
      }
    })
  }


  voltarParaListagem(){
    this.router.navigate(['/provas/lista'])
  }



  onSubmit(){
    console.log("prova",this.prova);
    if (this.id){
      this.service
      .atualizar(this.prova)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
        this.errors = ['Erro ao atualizar o prova.']
      })

    }else{

    this.service
    .salvar(this.prova)
    .subscribe ( response =>{
      this.success = true;
      this.errors = null;
      this.prova = response;
    }, errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
      })
    }
  }
}

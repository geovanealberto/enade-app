import { Injectable } from '@angular/core';
import { Usuario } from './usuarios/usuario';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL: string = environment.apiURLBase + '/api/usuarios';

  constructor( private http:HttpClient ) {

  }

  salvar (usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiURL}`, usuario);
  }

  atualizar(usuario: Usuario) : Observable<Usuario>{
    return this.http.put<any>(`${this.apiURL}/${usuario.idUsuario}`, usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }

  getUsuarioById(id:number) : Observable<Usuario>{
    return this.http.get<any> (`${this.apiURL}/${id}`);
}

deletar(usuario:Usuario) : Observable<any>{
  return this.http.delete<any> (`${this.apiURL}/${usuario.idUsuario}`);
}

}

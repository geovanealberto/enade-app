import { Injectable } from '@angular/core';
import { Resultado } from './resultados/resultado';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  apiURL: string = environment.apiURLBase + '/api/resultado';

  constructor( private http:HttpClient ) {

  }

  salvar (resultado: Resultado) : Observable<Resultado>{
    return this.http.post<Resultado>(`${this.apiURL}`, resultado);
  }

  atualizar(resultado: Resultado) : Observable<Resultado>{
    return this.http.put<any>(`${this.apiURL}/${resultado.idResultado}`, resultado);
  }

  getResultados(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(this.apiURL);
  }

  getResultadoById(id:number) : Observable<Resultado>{
    return this.http.get<any> (`${this.apiURL}/${id}`);
}

deletar(resultado:Resultado) : Observable<any>{
  return this.http.delete<any> (`${this.apiURL}/${resultado.idResultado}`);
}

  downloadRelatorio(){
  return this.http.get(`http://localhost:8080/api/resultado/relatorio`, {responseType:'text'}).subscribe(data =>{
  document.querySelector('iframe').src= data;

  });
}

  carregarGrafico(){

    return this.http.get(`http://localhost:8080/api/resultado/relatorio/grafico`);
  }

}


import { Injectable } from '@angular/core';
import { Questao } from './questoes/questao';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestoesService {

  apiURL: string = environment.apiURLBase + '/api/questao';

  constructor( private http:HttpClient ) {

  }

  salvar (questao: Questao) : Observable<Questao>{
    return this.http.post<Questao>(`${this.apiURL}`, questao);
  }

  atualizar(questao: Questao) : Observable<Questao>{
    return this.http.put<any>(`${this.apiURL}/${questao.idQuestao}`, questao);
  }

  getQuestoes(): Observable<Questao[]> {
    return this.http.get<Questao[]>(this.apiURL);
  }

  getQuestoesById(id:number) : Observable<Questao>{
    return this.http.get<any> (`${this.apiURL}/${id}`);
}

}

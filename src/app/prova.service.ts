import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prova } from './prova/prova';


@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  apiURL: string = environment.apiURLBase + '/api/prova';

  constructor( private http:HttpClient ) {

  }

  salvar (prova: Prova) : Observable<Prova>{
    return this.http.post<Prova>(`${this.apiURL}`, prova);
  }

  atualizar(prova: Prova) : Observable<Prova>{
    return this.http.put<any>(`${this.apiURL}/${prova.idProva}`, prova);
  }

  getProva(): Observable<Prova[]> {
    return this.http.get<Prova[]>(this.apiURL);
  }

  getProvaById(id:number) : Observable<Prova>{
    return this.http.get<any> (`${this.apiURL}/${id}`);
}

deletar(prova:Prova) : Observable<any>{
  return this.http.delete<any> (`${this.apiURL}/${prova.idProva}`);
}


}

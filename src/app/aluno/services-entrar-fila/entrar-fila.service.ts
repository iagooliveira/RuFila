import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrarFilaService {
  restauranteCodigo: number;
  vagasRestantes: number;
  posicaoAtual: number;
  dataFila: string;

  alunoMatricula: number;
  codigoFila: number;
  posicao: number;

  constructor(private http: HttpClient) { }

  getListaRestaurantes(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/restaurantes`);
  }

  getListaAlunos(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/alunos`);
  }

  getListaPratos(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/pratos`);
  }

  criarFila(restauranteCodigo: number, vagasRestantes: number, posicaoAtual: number, dataFila: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/filas`, {
      restauranteCodigo: restauranteCodigo,
      vagasRestantes: vagasRestantes,
      posicaoAtual: posicaoAtual,
      dataFila: dataFila
    });
  }

  getFila(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/filas`);
  }

  getUltimaPosicao(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/filas/lastPosition/last`);
  }

  getIdByUltimaPosicao(ultimaPosicao1:number): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/filas/lastPosition/last/${ultimaPosicao1}`);
  }

  entrarFilaAluno(alunoMatricula: string, codigoFila: number, posicao: number): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/aluno_fila`, {
      alunoMatricula: alunoMatricula,
      codigoFila: codigoFila,
      posicao: posicao
    });
  }

  getAlunoFila(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/aluno_fila`);
  }

}

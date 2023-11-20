import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VerFilaService {
  constructor(private http: HttpClient) {}

  getFilaDeAlunos(): any {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/aluno_fila`);
  }

  // async getPrimeiraPosicao(): Promise<void> {
  //   await this.getPrimeiraPos().toPromise().then((resp) => {

  //   })
  // }

  apagarAluno(posicao: number): Observable<any> {
    return this.http.delete<any>(
      `http://${environment.URL_PC_REMOTO}:3005/aluno_fila/${posicao}`
    );
  }

  getPrimeiraPos(): Observable<any> {
    return this.http.get<any>(
      `http://${environment.URL_PC_REMOTO}:3005/aluno_fila/alunopos/firstPosition`
    );
  }

  apagaFila(posicao_atual: number): Observable<any> {
    return this.http.delete<any>(
      `http://${environment.URL_PC_REMOTO}:3005/filas/${posicao_atual}`
    );
  }
}

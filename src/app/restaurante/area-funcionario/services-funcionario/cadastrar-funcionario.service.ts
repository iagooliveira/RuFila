import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastrarFuncionarioService {
  constructor(private http: HttpClient) {}

  cadastraFuncionario(nome: string, dataAdmissao: string): Observable<any> {
    return this.http.post<any>(
      `http://${environment.URL_PC_REMOTO}:3005/funcionarios`,
      { nome: nome, dataAdmissao: dataAdmissao }
    );
  }

  getFuncionarios(): Observable<any> {
    return this.http.get<any>(
      `http://${environment.URL_PC_REMOTO}:3005/funcionarios`
    );
  }
}

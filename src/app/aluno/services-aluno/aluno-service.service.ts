import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlunoServiceService {
  constructor(private http: HttpClient) {}

  cadastraAluno(matricula: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/alunos`, {
      matricula: matricula,
    });
  }
}

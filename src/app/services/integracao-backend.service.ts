import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IntegracaoBackendService {
  constructor(private httpClient: HttpClient) {}
  rotaIntegracao = `http://${environment.URL_PC_REMOTO}:3005`;

  async divulgaCardapio(params) {
    await this.httpClient.post<any[]>(`${this.rotaIntegracao}/aluno`, params);
  }
}

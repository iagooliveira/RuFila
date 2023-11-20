import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivulgarCardapioService {

  constructor(private http: HttpClient) {}

  cadastraPrato(principal: string, salada: string, guarnicao: string, suco: string, sobremesa: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/pratos`, {
        principal: principal, 
        salada: salada,
        carne: guarnicao, 
        suco: suco,
        sobremesa: sobremesa
    });
  }

  listaPratos(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/pratos`);
  }

  listaPrato(codigoPrato: number): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/pratos/${codigoPrato}`);
  }

  cadastraCardapio(restauranteCodigo: number, data: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/cardapios`, {
      restauranteCodigo: restauranteCodigo,
      dataCardapio: data
    });
  }

  listaCardapios(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/cardapios`);
  }

  cadastraPratoCardapio(cardapioCodigo: number, pratoCodigo: number): Observable <any>{
    return this.http.post<any>(`http://${environment.URL_PC_REMOTO}:3005/cardapio_prato`, {
      cardapio_codigo: cardapioCodigo,
      prato_codigo: pratoCodigo
    });
  }
}

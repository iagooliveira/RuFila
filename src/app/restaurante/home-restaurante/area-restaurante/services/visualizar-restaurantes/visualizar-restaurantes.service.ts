import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VisualizarRestaurantesService {
  restauranteCodigo: number;
  funcionarioCodigo: number;
  constructor(private http: HttpClient) {}

  getDados(): Observable<any> {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/restaurantes`);
  }

  vinculaFuncionarioRestaurante(
    restauranteCodigo: number,
    funcionarioCodigo: number
  ): Observable<any> {
    return this.http.post<any>(
      `http://${environment.URL_PC_REMOTO}:3005/funcionario_restaurante`,
      {
        restauranteCodigo: restauranteCodigo,
        funcionarioCodigo: funcionarioCodigo,
      }
    );
  }
}

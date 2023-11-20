import { Component, OnInit } from '@angular/core';
import { VisualizarRestaurantesService } from '../services/visualizar-restaurantes/visualizar-restaurantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-restaurantes',
  templateUrl: './visualizar-restaurantes.component.html',
  styleUrls: ['./visualizar-restaurantes.component.css'],
})
export class VisualizarRestaurantesComponent implements OnInit {
  dados: any[];
  rotaVoltar = 'area-restaurante';
  constructor(
    private visualizarRestaurantes: VisualizarRestaurantesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.visualizarRestaurantes.getDados().subscribe(
      (res) => {
        this.dados = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // voltar() {
  //   void this.route.navigate(['area-restaurante']);
  // }
}

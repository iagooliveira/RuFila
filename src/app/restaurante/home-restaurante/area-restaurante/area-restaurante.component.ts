import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-restaurante',
  templateUrl: './area-restaurante.component.html',
  styleUrls: ['./area-restaurante.component.css'],
})
export class AreaRestauranteComponent implements OnInit {
  rotaVoltar = 'home-restaurante';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaCadastraRestaurante() {
    void this.route.navigate(['cadastra-restaurante']);
  }

  rotaVisualizarRestaurantes() {
    void this.route.navigate(['visualizar-restaurantes']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-cardapio',
  templateUrl: './area-cardapio.component.html',
  styleUrls: ['./area-cardapio.component.css']
})
export class AreaCardapioComponent implements OnInit {
  rotaVoltar = 'home-restaurante';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaDivulgarCardapio() {
    void this.route.navigate(['divulgar-cardapio']);
  }

  rotaCadastrarPrato() {
    void this.route.navigate(['cadastrar-prato']);
  }

  rotaVincularPrato() {
    void this.route.navigate(['vincular-cardapio-prato']);
  }

}

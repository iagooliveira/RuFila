import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-funcionario',
  templateUrl: './area-funcionario.component.html',
  styleUrls: ['./area-funcionario.component.css'],
})
export class AreaFuncionarioComponent implements OnInit {
  rotaVoltar = 'home-restaurante';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaCadastrarFuncionario() {
    void this.route.navigate(['cadastrar-funcionario']);
  }

  rotaVincularFuncionario() {
    void this.route.navigate(['vincular-funcionario']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaCriaAluno(): void {
    void this.route.navigate(['aluno-home']);
  }

  rotaTelaPrincipal(): void {
    void this.route.navigate(['']);
  }

  rotaRestaurante(): void {
    void this.route.navigate(['home-restaurante']);
  }
}

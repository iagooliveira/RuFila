import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.css'],
})
export class BotaoVoltarComponent implements OnInit {
  @Input() rota: string;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  voltar(): void {
    void this.route.navigate([this.rota]);
  }
}

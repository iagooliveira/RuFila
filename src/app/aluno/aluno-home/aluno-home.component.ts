import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoServiceService } from '../services-aluno/aluno-service.service';

@Component({
  selector: 'app-aluno-home',
  templateUrl: './aluno-home.component.html',
  styleUrls: ['./aluno-home.component.css'],
})
export class AlunoHomeComponent implements OnInit {
  rotaVoltar = 'home';
  formsMatricula = new FormControl();

  constructor(
    private route: Router,
    private alunosService: AlunoServiceService
  ) {}

  ngOnInit(): void {}

  // rotaFilaAluno(): void {
  //   void this.route.navigate(['entrar-fila']);
  // }

  rotaByPass(): void {
    void this.route.navigate(['entrar-fila']);
  }
  cadastrarAluno(): void {
    this.alunosService
      .cadastraAluno(this.formsMatricula.value)
      .subscribe((res) => {
        void this.route.navigate(['entrar-fila']);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CadastrarRestauranteService } from '../services/cadastrar-restaurante/cadastrar-restaurante.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrls: ['./cadastrar-restaurante.component.css'],
})
export class CadastrarRestauranteComponent implements OnInit {
  nome: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  rotaVoltar = 'area-restaurante';
  constructor(
    private cadastrarRestauranteService: CadastrarRestauranteService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onCadastraRestaurante(nome: string) {
    this.cadastrarRestauranteService
      .cadastraRestaurante(nome)
      .subscribe((res) => {
        console.log(res);
        this.snackBar.open('Restaurante cadastrado com sucesso !', 'x', {
          duration: 6000,

          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        void this.route.navigate(['area-restaurante']);
      });
  }

  // voltar() {
  //   void this.route.navigate(['area-restaurante']);
  // }
}

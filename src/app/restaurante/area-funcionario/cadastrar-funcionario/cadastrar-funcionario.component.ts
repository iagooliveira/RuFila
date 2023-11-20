import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastrarRestauranteService } from '../../home-restaurante/area-restaurante/services/cadastrar-restaurante/cadastrar-restaurante.service';
import { CadastrarFuncionarioService } from '../services-funcionario/cadastrar-funcionario.service';
import * as dateFormat from 'dateformat';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css'],
})
export class CadastrarFuncionarioComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  toppings = new FormControl();
  nome: string;
  dataAdmissao: string;

  rotaVoltar = 'area-funcionario';

  constructor(
    private snackBar: MatSnackBar,
    private route: Router,
    private cadastrarFuncionarioService: CadastrarFuncionarioService
  ) {}

  ngOnInit(): void {}

  onCadastraFuncionario(nome: string, dataAdmissao: string) {
    //dataAdmissao =  new Date('2022-12-31');
    //dataAdmissao = dateFormat(dataAdmissao, "yyyy-mm-dd");
    this.cadastrarFuncionarioService
      .cadastraFuncionario(nome, dataAdmissao)
      .subscribe((res) => {
        console.log(res);
        this.snackBar.open('Restaurante cadastrado com sucesso !', 'x', {
          duration: 6000,

          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        void this.route.navigate(['area-funcionario']);
      });
  }

  rotaHomeRestaurante() {
    void this.route.navigate(['home-restaurante']);
  }
}

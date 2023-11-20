import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DivulgarCardapioService } from './divulgar-cardapio.service';
import { VisualizarRestaurantesService } from '../home-restaurante/area-restaurante/services/visualizar-restaurantes/visualizar-restaurantes.service';

@Component({
  selector: 'app-divulgar-cardapio',
  templateUrl: './divulgar-cardapio.component.html',
  styleUrls: ['./divulgar-cardapio.component.css'],
})
export class DivulgarCardapioComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  data: string;

  rotaVoltar = 'area-cardapio';

  listaRestaurantes: any[] = [];
  formsRestaurante = new FormControl();

  constructor(private snackBar: MatSnackBar, private route: Router, 
    private divulgarCardapioService: DivulgarCardapioService,
    private visualizarRestaurantesService: VisualizarRestaurantesService
    ) {}

  ngOnInit(): void {
    this.visualizarRestaurantesService.getDados().subscribe((dados) => {
      this.listaRestaurantes = dados.data;
    });
  }

  openSnackBar() {
    this.snackBar.open('Cardapio divulgado !', 'x', {
      duration: 6000,

      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onCadastraCardapio(data: string) {
    const idRestaurante = this.formsRestaurante.value;
    this.divulgarCardapioService
      .cadastraCardapio(idRestaurante, data)
      .subscribe((dados) => {
        this.snackBar.open('Cardápio cadastrado com sucesso !', 'x', {
          duration: 6000,
    
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        void this.route.navigate(['area-cardapio']);
      });
      
  }
}

import { Component, OnInit } from '@angular/core';
import { CadastrarFuncionarioService } from '../services-funcionario/cadastrar-funcionario.service';
import { VisualizarRestaurantesService } from '../../home-restaurante/area-restaurante/services/visualizar-restaurantes/visualizar-restaurantes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vincular-funcionario',
  templateUrl: './vincular-funcionario.component.html',
  styleUrls: ['./vincular-funcionario.component.css'],
})
export class VincularFuncionarioComponent implements OnInit {
  rotaVoltar = 'area-funcionario';
  listaRestaurantes: any[] = [];
  listaFuncionarios: any[] = [];
  formsRestaurante = new FormControl();
  formsFuncionario = new FormControl();
  constructor(
    private cadastrarFuncionarioService: CadastrarFuncionarioService,
    private visualizarRestaurantesService: VisualizarRestaurantesService
  ) {}

  ngOnInit(): void {
    this.visualizarRestaurantesService.getDados().subscribe((dados) => {
      this.listaRestaurantes = dados.data;
    });

    this.cadastrarFuncionarioService.getFuncionarios().subscribe((dados) => {
      this.listaFuncionarios = dados.data;
    });
  }

  onVinculaFuncionarioRestaurante() {
    //console.log(this.formsRestaurante);
    const idRestaurante = this.formsRestaurante.value;
    const idFuncionario = this.formsFuncionario.value;
    this.visualizarRestaurantesService
      .vinculaFuncionarioRestaurante(idRestaurante, idFuncionario)
      .subscribe((dados) => {
        alert(dados.message);
      });
  }
}

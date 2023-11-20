import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardapioComponent } from '../cardapio/cardapio.component';
import { EntrarFilaService } from '../services-entrar-fila/entrar-fila.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-entrar-fila',
  templateUrl: './entrar-fila.component.html',
  styleUrls: ['./entrar-fila.component.css'],
})
export class EntrarFilaComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  listaRestaurantes: any[] = [];
  listaAlunos: any[] = [];
  listaPratos: any[] = [];
  listaFila: any[] = [];
  listaAlunoFila: any[] = [];
  ultimaPosicao1: number;
  currentDate: string;
  codigoFila: number;
  formsRestaurante = new FormControl();
  formsAluno = new FormControl();
  formsPrato = new FormControl();
  rotaVoltar = 'aluno-home';

  constructor(
    private route: Router,
    public dialog: MatDialog,
    private entrarFilaService: EntrarFilaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    this.currentDate = `${year}-${month}-${day}`;

    this.entrarFilaService.getListaRestaurantes().subscribe((dados) => {
      this.listaRestaurantes = dados.data;
    });
    this.entrarFilaService.getListaAlunos().subscribe((dados) => {
      this.listaAlunos = dados.data;
    });
    this.entrarFilaService.getListaPratos().subscribe((dados) => {
      this.listaPratos = dados.data;
    });
    this.entrarFilaService.getUltimaPosicao().subscribe((dados) => {
      if (!dados.data[0].ultimaPosicao) {
        this.ultimaPosicao1 = 0;
      } else {
        this.ultimaPosicao1 = dados.data[0].ultimaPosicao;
      }

      console.log('ULTIMAPOS REQ!', this.ultimaPosicao1);
    });
    this.entrarFilaService.getFila().subscribe((dados) => {
      this.listaFila = dados.data;
    });
    this.entrarFilaService.getAlunoFila().subscribe((dados) => {
      this.listaAlunoFila = dados.data;
    });
  }

  onEntrarFila() {
    this.ultimaPosicao1 = this.ultimaPosicao1 + 1;
    console.log('ULTIMAPOS11', this.ultimaPosicao1);
    const idRestaurante = this.formsRestaurante.value;
    const idAluno = this.formsAluno.value;
    this.entrarFilaService
      .criarFila(idRestaurante, 30, this.ultimaPosicao1, this.currentDate)
      .subscribe((dados) => {
        //console.log(dados);
      });

    setTimeout(() => {
      this.entrarFilaService
        .getIdByUltimaPosicao(this.ultimaPosicao1)
        .subscribe((dados) => {
          this.codigoFila = dados.data[0].codigo;
          //console.log(this.codigoFila);
        });
    }, 900);

    setTimeout(() => {
      this.entrarFilaService
        .entrarFilaAluno(idAluno, this.codigoFila, this.ultimaPosicao1)
        .subscribe((dados) => {
          console.log(
            'idAluno: ',
            idAluno,
            'codigoDaFila: ',
            this.codigoFila,
            'ultimaposicao: ',
            this.ultimaPosicao1
          );
        });
    }, 1400);

    this.snackBar.open(
      `Entrou na fila! Ficha: ${this.listaAlunoFila.length + 1}`,
      'x',
      {
        duration: 6000,

        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
    );
    setTimeout(() => {
      console.log(this.ultimaPosicao1);
      location.reload();
    }, 1350);
  }

  rotaSairFila(): void {
    void this.route.navigate(['home']);
  }

  openDialog() {
    console.log(this.listaAlunoFila.length);
    void this.route.navigate(['ver-fila']);

    // const dialogRef = this.dialog.open(CardapioComponent, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   // aqui pega a resposta do dialog
    // });
  }
}

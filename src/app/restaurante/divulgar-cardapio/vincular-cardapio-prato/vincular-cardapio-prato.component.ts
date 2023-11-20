import { Component, OnInit } from '@angular/core';
import { DivulgarCardapioService } from '../divulgar-cardapio.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { CardapioComponent } from 'src/app/aluno/cardapio/cardapio.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vincular-cardapio-prato',
  templateUrl: './vincular-cardapio-prato.component.html',
  styleUrls: ['./vincular-cardapio-prato.component.css']
})
export class VincularCardapioPratoComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  listaCardapios: any[] = [];
  listaDatas: any[] = [];
  listaPratos: any[] = [];
  formsCardapio = new FormControl();
  formsPrato = new FormControl();
  
  rotaVoltar = 'area-cardapio';

  constructor(private snackBar: MatSnackBar, private route: Router, 
    private divulgarCardapioService: DivulgarCardapioService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.divulgarCardapioService.listaCardapios().subscribe((dados) => {
      this.listaCardapios = dados.data;
    });
    this.divulgarCardapioService.listaPratos().subscribe((dados) => {
      this.listaPratos = dados.data;
    });
  }

  onSelecionaCardapios(codigo: number){
    this.listaDatas = [];
    this.listaCardapios.forEach(cardapio => {
      if(cardapio.restaurante_codigo == codigo){
        this.listaDatas.push(cardapio);
      }
    });
  }
  
  openDialog(pratoCodigo: number) {
    this.divulgarCardapioService.listaPrato(pratoCodigo).subscribe((dados) => {
      const dialogRef = this.dialog.open(CardapioComponent, {
        data: {
          principal: dados.data[0].principal,
          guarnicao: dados.data[0].carne,
          salada: dados.data[0].salada,
          suco: dados.data[0].suco,
          sobremesa: dados.data[0].sobremesa
        },
      });
    });   
  }
  onVinculaCardapio(){
    const cardapioCodigo = this.formsCardapio.value;
    const pratoCodigo = this.formsPrato.value;
    this.divulgarCardapioService
      .cadastraPratoCardapio(cardapioCodigo, pratoCodigo)
      .subscribe((dados)=>{
        console.log(dados);
        this.snackBar.open('Prato adicionado com sucesso !', 'x', {
          duration: 6000,
    
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        void this.route.navigate(['area-cardapio']);
    })
  }
}

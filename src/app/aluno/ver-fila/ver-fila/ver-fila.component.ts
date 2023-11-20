import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { VerFilaService } from '../../services-ver-fila/ver-fila.service';
import { EntrarFilaService } from '../../services-entrar-fila/entrar-fila.service';

@Component({
  selector: 'app-ver-fila',
  templateUrl: './ver-fila.component.html',
  styleUrls: ['./ver-fila.component.css'],
})
export class VerFilaComponent implements OnInit, OnDestroy {
  listaDeFilas: any[] = [];
  rotaVoltar = 'entrar-fila';
  contadorFila: number = 5;

  primeiraPosicaoFila: number;

  idIntervalo: number;

  constructor(
    private verFilaService: VerFilaService,
    private entrarFilaService: EntrarFilaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.verFilaService.getFilaDeAlunos().subscribe((dados) => {
      this.listaDeFilas = dados.data;
      this.listaDeFilas.sort((a, b) => {
        return a.posicao - b.posicao;
      });
      console.log(this.listaDeFilas);
    });

    void this.getPrimeiraPosicao();

    this.idIntervalo = window.setInterval(() => {
      this.contadorFila--;

      if (this.contadorFila == 0) {
        void this.requisicoesContador(
          this.primeiraPosicaoFila
          // this.listaDeFilas
        );
        console.log(this.listaDeFilas);
        this.cdr.detectChanges();
        this.contadorFila = 5;
        this.cdr.detectChanges();
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  apagarIntervalo(): void {
    clearInterval(this.idIntervalo);
  }
  ngOnDestroy(): void {
    clearInterval(this.idIntervalo);
  }

  // getPrimeiraPosicao(): void {
  //   this.verFilaService.getPrimeiraPosicao().subscribe((dados) => {
  //     this.primeiraPosicaoFila = dados.data[0].primeiraPosicao;
  //   });
  // }

  async getPrimeiraPosicao(): Promise<void> {
    await this.verFilaService
      .getPrimeiraPos()
      .toPromise()
      .then((dados) => {
        this.primeiraPosicaoFila = dados.data[0].primeiraPosicao;
      });
  }

  // apagarAlunoNaPosicao(posicao: number) {
  //   this.verFilaService.apagarAluno(posicao).subscribe((dados) => {
  //     this.verFilaService.getFilaDeAlunos().subscribe((dados) => {
  //       this.listaDeFilas = dados.data;
  //       this.listaDeFilas.sort((a, b) => {
  //         return a.posicao - b.posicao;
  //       });
  //       console.log(this.listaDeFilas);
  //     });
  //   });
  // }

  async apagarAlunoNaPosicao(posicao: number) {
    await this.verFilaService
      .apagarAluno(posicao)
      .toPromise()
      .then((dados) => {});
  }

  async getLista(): Promise<any> {
    await this.verFilaService
      .getFilaDeAlunos()
      .toPromise()
      .then((dados) => {
        this.listaDeFilas = dados.data;
        this.listaDeFilas.sort((a, b) => {
          return a.posicao - b.posicao;
        });
        //console.log(listaFilas);
      });
  }

  async apagarFilaNaPosicao(posicao_atual: number) {
    await this.verFilaService
      .apagaFila(posicao_atual)
      .toPromise()
      .then((dados) => {});
  }

  async requisicoesContador(dado: number): Promise<any> {
    await this.apagarAlunoNaPosicao(dado);
    await this.apagarFilaNaPosicao(dado);
    await this.getPrimeiraPosicao();
    await this.getLista();
    this.cdr.detectChanges();
  }
}

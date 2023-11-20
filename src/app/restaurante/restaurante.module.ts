import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivulgarCardapioComponent } from './divulgar-cardapio/divulgar-cardapio.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { HomeRestauranteComponent } from './home-restaurante/home-restaurante.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastrarFuncionarioComponent } from './area-funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AreaFuncionarioComponent } from './area-funcionario/area-funcionario.component';
import { AreaRestauranteComponent } from './home-restaurante/area-restaurante/area-restaurante.component';
import { CadastrarRestauranteComponent } from './home-restaurante/area-restaurante/cadastrar-restaurante/cadastrar-restaurante.component';
import { VisualizarRestaurantesComponent } from './home-restaurante/area-restaurante/visualizar-restaurantes/visualizar-restaurantes.component';
import { VincularFuncionarioComponent } from './area-funcionario/vincular-funcionario/vincular-funcionario.component';
import { BotaoVoltarModule } from '../home/botao-voltar/botao-voltar.module';
import { CadastrarPratoComponent } from './divulgar-cardapio/cadastrar-prato/cadastrar-prato.component';
import { VincularCardapioPratoComponent } from './divulgar-cardapio/vincular-cardapio-prato/vincular-cardapio-prato.component';
import { AreaCardapioComponent } from './divulgar-cardapio/area-cardapio/area-cardapio.component';
import { CardapioComponent } from '../aluno/cardapio/cardapio.component';
import { AlunoModule } from '../aluno/aluno.module';


@NgModule({
  declarations: [
    DivulgarCardapioComponent,
    HomeRestauranteComponent,
    CadastrarFuncionarioComponent,
    AreaFuncionarioComponent,
    AreaRestauranteComponent,
    CadastrarRestauranteComponent,
    VisualizarRestaurantesComponent,
    VincularFuncionarioComponent,
    CadastrarPratoComponent,
    VincularCardapioPratoComponent,
    AreaCardapioComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BotaoVoltarModule
  ],
})
export class RestauranteModule {}

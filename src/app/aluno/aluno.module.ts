import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { EntrarFilaComponent } from './entrar-fila/entrar-fila.component';

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
import { AlunoHomeComponent } from './aluno-home/aluno-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CardapioComponent } from './cardapio/cardapio.component';
import { BotaoVoltarModule } from '../home/botao-voltar/botao-voltar.module';
import { VerFilaComponent } from './ver-fila/ver-fila/ver-fila.component';

@NgModule({
  declarations: [EntrarFilaComponent, AlunoHomeComponent, CardapioComponent, VerFilaComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,

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
    BotaoVoltarModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AlunoModule {}

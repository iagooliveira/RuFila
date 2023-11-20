import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarFilaComponent } from './entrar-fila/entrar-fila.component';
import { AlunoHomeComponent } from './aluno-home/aluno-home.component';
import { VerFilaComponent } from './ver-fila/ver-fila/ver-fila.component';
const routes: Routes = [
  {
    path: 'entrar-fila',
    component: EntrarFilaComponent,
  },
  {
    path: 'aluno-home',
    component: AlunoHomeComponent,
  },
  {
    path: 'ver-fila',
    component: VerFilaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}

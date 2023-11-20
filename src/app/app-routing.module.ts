import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then(m => m.RestauranteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

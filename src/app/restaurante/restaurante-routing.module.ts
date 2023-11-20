import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRestauranteComponent } from './home-restaurante/home-restaurante.component';
import { DivulgarCardapioComponent } from './divulgar-cardapio/divulgar-cardapio.component';
import { CadastrarFuncionarioComponent } from './area-funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AreaFuncionarioComponent } from './area-funcionario/area-funcionario.component';
import { AreaRestauranteComponent } from './home-restaurante/area-restaurante/area-restaurante.component';
import { CadastrarRestauranteComponent } from './home-restaurante/area-restaurante/cadastrar-restaurante/cadastrar-restaurante.component';
import { VisualizarRestaurantesComponent } from './home-restaurante/area-restaurante/visualizar-restaurantes/visualizar-restaurantes.component';
import { VincularFuncionarioComponent } from './area-funcionario/vincular-funcionario/vincular-funcionario.component';
import { CadastrarPratoComponent } from './divulgar-cardapio/cadastrar-prato/cadastrar-prato.component';
import { VincularCardapioPratoComponent } from './divulgar-cardapio/vincular-cardapio-prato/vincular-cardapio-prato.component';
import { AreaCardapioComponent } from './divulgar-cardapio/area-cardapio/area-cardapio.component';

const routes: Routes = [
  {
    path: 'home-restaurante',
    component: HomeRestauranteComponent,
  },
  {
    path: 'area-cardapio',
    component: AreaCardapioComponent,
  },
  {
    path: 'divulgar-cardapio',
    component: DivulgarCardapioComponent,
  },
  {
    path: 'cadastrar-prato',
    component: CadastrarPratoComponent,
  },
  {
    path: 'vincular-cardapio-prato',
    component: VincularCardapioPratoComponent,
  },
  {
    path: 'cadastrar-funcionario',
    component: CadastrarFuncionarioComponent,
  },
  {
    path: 'area-funcionario',
    component: AreaFuncionarioComponent,
  },
  {
    path: 'area-restaurante',
    component: AreaRestauranteComponent,
  },
  {
    path: 'cadastra-restaurante',
    component: CadastrarRestauranteComponent,
  },
  {
    path: 'visualizar-restaurantes',
    component: VisualizarRestaurantesComponent,
  },
  {
    path: 'vincular-funcionario',
    component: VincularFuncionarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteRoutingModule {}

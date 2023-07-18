import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DetallesPokemonComponent } from './components/pokemon/detalles-pokemon/detalles-pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPokemonComponent } from './components/pokemon/lista-pokemon/lista-pokemon.component';


const routes: Routes = [
  {
    path: `` ,
    component: HomeComponent
  },
  {
    path: `home` ,
    component: HomeComponent
  },
  {
    path: `pokemon`,
    component: ListaPokemonComponent
  },
  {
    path: `detalles/:pokemon`,
    component: DetallesPokemonComponent
  },
  {
    path: `login`,
    component: LoginComponent
  },
  {
    path: `register`,
    component: RegisterComponent
  },
  {
    path: `about`,
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}

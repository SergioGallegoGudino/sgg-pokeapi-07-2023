import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPokemonComponent } from './components/pokemon/lista-pokemon/lista-pokemon.component';
import { DetallesPokemonComponent } from './components/pokemon/detalles-pokemon/detalles-pokemon.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPokemonComponent,
    DetallesPokemonComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

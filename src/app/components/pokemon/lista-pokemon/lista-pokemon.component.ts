import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  database:any = null;
  nombre:string = "";
  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getAll()
      .subscribe(result => this.database = result);
  }

  buscar(){
    console.log(this.nombre);
  }

}
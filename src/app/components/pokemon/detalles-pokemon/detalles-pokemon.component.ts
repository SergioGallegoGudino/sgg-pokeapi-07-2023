import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css']
})
export class DetallesPokemonComponent {
  nombre:any = null;
  datos:any = null;
  especie: any = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nombre = params['pokemon'];
    });
    this.pokemonService.getPokemon(this.nombre)
      .subscribe(result => this.datos = result);
    this.pokemonService.getEspecie(this.nombre)
      .subscribe(result => this.especie = result);
  }
}

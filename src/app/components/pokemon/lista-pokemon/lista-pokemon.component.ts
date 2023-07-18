import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent {
  database:any = null;
  pokemon: any = null;
  filtro: boolean = false;
  nombre: any = "";
  constructor(private pokemonService: PokemonService,  private router: Router){}

  ngOnInit(){
    this.pokemonService.getAll()
      .subscribe(result => this.database = result);
  }

  buscar(){
    if(this.nombre != ""){
      this.router.navigate(['/detalles', this.nombre]);
    }
  }

}

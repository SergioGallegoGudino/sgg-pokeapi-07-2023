import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(){

    let offset = Math.floor(Math.random() * 1000);

    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`);
  }

  getPokemon(name: any){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + name);
  }

  getEspecie(name:any){
    return this.http.get("https://pokeapi.co/api/v2/pokemon-species/" + name);
  }

}

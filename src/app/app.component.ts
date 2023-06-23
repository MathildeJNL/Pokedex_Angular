import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  //permet de définir le code html qui est associé
  templateUrl: 'app.component.html'
})
//composant web = classe + une vue
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: number){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId); // + => conversion d'un string en number
    if(pokemon) {
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avec demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}

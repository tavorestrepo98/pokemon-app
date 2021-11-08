import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { PokemonService } from './../../../core/services/pokemon.service';

import { PokemonListItem } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  pokemonesSeleccionados: PokemonListItem[] = [];
  pokemones: PokemonListItem[] = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(){
    this.pokemonService.getPokemons()
    .subscribe(data => {
      this.pokemones = data;
      for(let i = 0; i < this.pokemones.length; i++){

        let imagen: string = '';

        if(i > 100){
          imagen = `../../../../assets/151_pokemon/${i+1}.png`;
        }else{
          imagen = `../../../../assets/151_pokemon/${ i+1<10 ? '00'+(i+1)+'.png' : '0'+(i+1)+'.png' }`;
        }

        this.pokemones[i] = {
          ...this.pokemones[i],
          img: imagen
        }
      }
    });

    this.pokemonesSeleccionados = this.pokemonService.pokemonSeleccionado;
  }

  agregarPokemon(pokemon: PokemonListItem){
    if((this.pokemonesSeleccionados.length < 2) &&
        (this.pokemonesSeleccionados.filter(data => data.name === pokemon.name).length === 0 )){
      // this.pokemonesSeleccionados.push(pokemon);
      this.pokemonService.pokemonSeleccionado.push(pokemon);
    }
  }

  quitarPokemon(i){
    // this.pokemonesSeleccionados.splice(i, 1);
    this.pokemonService.pokemonSeleccionado.splice(i, 1);
  }

  iraPelear(){
    this.router.navigateByUrl('pelea');
  }


}

import { PokemonListItem } from './../../../core/models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from '../../../core/services/pokemon.service';

@Component({
  selector: 'app-pelea',
  templateUrl: './pelea.component.html',
  styleUrls: ['./pelea.component.scss']
})
export class PeleaComponent implements OnInit {

  pokemonesSeleccionados: PokemonListItem[] = [];
  puntos: number[] = [0, 0]
  flag: boolean = false;
  indiceGanador: number;
  indicePerdedor: number;
  empate: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.pokemonService.pokemonSeleccionado);
    this.pokemonesSeleccionados = this.pokemonService.pokemonSeleccionado;

    if(this.pokemonesSeleccionados.length === 0){
      this.router.navigateByUrl('/')
    }

  }


  poneraPelear(){

    const nombre1: string = this.pokemonesSeleccionados[0].name;
    const nombre2: string = this.pokemonesSeleccionados[1].name;

    this.pokemonService.getResultBattle(nombre1, nombre2)
    .subscribe((resp: any) => {
      // console.log(resp);
      this.puntos[0] = resp.puntos.pokemon1;
      this.puntos[1] = resp.puntos.pokemon2;
      this.flag = true;

      if(this.puntos[0] > this.puntos[1]){
        this.empate = false;
        this.indiceGanador = 0;
        this.indicePerdedor = 1;
      }else if(this.puntos[0] < this.puntos[1]){
        this.empate = false;
        this.indiceGanador = 1;
        this.indicePerdedor = 0;
      }else if(this.puntos[0] === this.puntos[1]){
        this.empate = true;
      }


    });
  }

}

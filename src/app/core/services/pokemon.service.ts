import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { PokemonListItem } from './../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonSeleccionado: PokemonListItem[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getPokemons(): Observable<PokemonListItem[]>{

    let params = new HttpParams();

    params = params.append('limit', '150');
    params = params.append('offset', '0');

    return this.http.get<PokemonListItem[]>(`${environment.pokemon_url}/pokemon`, { params })
    .pipe(
      map((data: any) => {
        return data.results.map(pokemon => {

          return {
            ...pokemon,
            img: ''
          }
        })
      })
    )
  }

  getResultBattle(pokemon1: string, pokemon2: string){
    let params = new HttpParams();

    params = params.append('pokemon1', pokemon1);
    params = params.append('pokemon2', pokemon2);

    return this.http.get(`${environment.pokemon_api}`, { params });
  }


}

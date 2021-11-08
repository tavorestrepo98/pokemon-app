import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PeleaComponent } from './pages/pelea/pelea.component';



@NgModule({
  declarations: [DashboardComponent, PeleaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }

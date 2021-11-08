import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PeleaComponent } from './pages/pelea/pelea.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pelea', component: PeleaComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

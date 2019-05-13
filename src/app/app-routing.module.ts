import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import {PokeInfosComponent} from './components/pokeinfo/pokeinfo.component';
import {PokefinderComponent} from './components/pokefinder/pokefinder.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemon/:id', component: PokeInfosComponent},
  {path: 'search/:name', component: PokefinderComponent},
  {path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

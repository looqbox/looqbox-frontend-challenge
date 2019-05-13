import { Component, OnInit } from '@angular/core';
import {PokemonsService, PokeRules} from '../../services/pokemons.service';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: PokeRules[] = [];
// tslint:disable-next-line: variable-name
  constructor(private _pokemons: PokemonsService) { }

  ngOnInit() {
    this.pokemons = this._pokemons.getPokemon();
  }

}


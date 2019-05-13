import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';


@Component({
  selector: 'app-pokefinder',
  templateUrl: './pokefinder.component.html',
  styleUrls: ['./pokefinder.component.css']
})
export class PokefinderComponent implements OnInit {

  pkmn: any[] = [];
  constructor(private params: ActivatedRoute, private pokemons: PokemonsService) {
    this.params.params.subscribe(poke => {
      this.pkmn = this.pokemons.getPkmn(poke.name);
    });
   }

  ngOnInit() {
  }
}

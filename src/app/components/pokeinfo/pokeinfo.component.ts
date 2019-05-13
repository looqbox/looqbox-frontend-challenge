import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-infos',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeInfosComponent implements OnInit {

  pokemon: any[] = [];

  constructor(private ParametersRoute: ActivatedRoute, private pokeService: PokemonsService) {
    this.ParametersRoute.params.subscribe(params => {
     this.pokemon = this.pokeService.getPoke(params.id);
    });
   }

  ngOnInit() {
  }

}

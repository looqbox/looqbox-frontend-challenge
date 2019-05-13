import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private path: Router) {}

  ngOnInit() {}

  getPkmn(choosePokemon: string) {
    this.path.navigate(['search', choosePokemon]);
  }
}

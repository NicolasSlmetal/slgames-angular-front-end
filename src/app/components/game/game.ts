import { Component, Inject, Injectable, input } from '@angular/core';
import { GameModel } from './game-model';

@Component({
  selector: 'slgames-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {

  getGenresNames() {
    return this.game().genres.map(g => g.genreName).join(', ');
  }

  game = input.required<GameModel>();

  swapFavorite() {
    this.game().isFavorite = !this.game().isFavorite;
  }
  
}

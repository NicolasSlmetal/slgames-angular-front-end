import { Component, effect, input, OnInit, Signal } from '@angular/core';
import { GameMenu } from '../game-menu/game-menu';
import { GameModel } from '../game/game-model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'slgames-games-by-genre-section',
  imports: [
    GameMenu,
    CommonModule
  ],
  templateUrl: './games-by-genre-section.html',
  styleUrl: './games-by-genre-section.css'
})
export class GamesByGenreSection {

  gamesByGenre: Map<string, GameModel[]> = new Map();
  games = input.required<GameModel[]>();

  constructor() {
    effect(() => {
      const genres = new Set<string>();
      const games = this.games();

      games.forEach(game => {
          game.genres.forEach(g => genres.add(g.genreName));
      });
      genres.forEach(genre => {
          this.gamesByGenre.set(genre, games.filter(game => game.genres.map(g => g.genreName).includes(genre)));
      });
      console.log('Games by genre:', this.gamesByGenre);
    })
  }

  getGamesByGenreMap(): Map<string, GameModel[]> {
    return this.gamesByGenre;
  }

  getGenres(): string[] {
    return Array.from(this.gamesByGenre.keys());
  }

  getGamesByGenre(genre: string): GameModel[] {
    return this.gamesByGenre.get(genre) || [];
  }
  
}

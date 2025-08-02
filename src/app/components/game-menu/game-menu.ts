import { Component, input } from '@angular/core';
import { Game } from '../game/game';
import { GameModel } from '../game/game-model';

@Component({
  selector: 'slgames-game-menu',
  imports: [Game],
  templateUrl: './game-menu.html',
  styleUrl: './game-menu.css'
})
export class GameMenu {

  title = input<string>();
  games = input.required<GameModel[]>();

}

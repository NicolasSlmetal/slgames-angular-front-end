import { Component, effect, inject, signal } from '@angular/core';
import { components } from '../../components';
import { GameModel } from '../../components/game/game-model';
import { GameService } from '../../services/game-service/game-service';

@Component({
  selector: 'slgames-home',
  imports: components,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  gameService = inject(GameService);
  initialGames = signal<GameModel[]>([]);
  protected readonly title = signal('slgames-angular');

  constructor() {
    effect(() => {
      this.gameService.fetchGames().then(games => {
        this.initialGames.set(games);
      }).catch(error => {
        console.error('Error fetching games:', error);
      });
    });
  }
}

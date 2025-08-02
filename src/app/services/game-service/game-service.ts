import { inject, Injectable } from '@angular/core';
import { ApiLoader } from '../api-loader/api-loader';
import { GameModel } from '../../components/game/game-model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiLoader = inject(ApiLoader);

  fetchGames() : Promise<GameModel[]> {
    return this.apiLoader.fetchData<GameModel[]>("games");
  }
}

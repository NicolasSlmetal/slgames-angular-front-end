import { Component, effect, inject, signal } from '@angular/core';
import { components } from './components';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...components],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
}

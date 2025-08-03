import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'slgames-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  currentRoute = inject(ActivatedRoute);

}

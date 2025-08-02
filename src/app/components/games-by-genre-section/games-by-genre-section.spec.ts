import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesByGenreSection } from './games-by-genre-section';

describe('GamesByGenreSection', () => {
  let component: GamesByGenreSection;
  let fixture: ComponentFixture<GamesByGenreSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesByGenreSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesByGenreSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

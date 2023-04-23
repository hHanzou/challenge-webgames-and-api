import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameformsComponent } from './gameforms.component';

describe('GameformsComponent', () => {
  let component: GameformsComponent;
  let fixture: ComponentFixture<GameformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

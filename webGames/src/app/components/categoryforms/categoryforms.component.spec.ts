import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryformsComponent } from './categoryforms.component';

describe('CategoryformsComponent', () => {
  let component: CategoryformsComponent;
  let fixture: ComponentFixture<CategoryformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

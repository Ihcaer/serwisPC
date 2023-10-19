import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sekcja1Component } from './sekcja1.component';

describe('Sekcja1Component', () => {
  let component: Sekcja1Component;
  let fixture: ComponentFixture<Sekcja1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sekcja1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sekcja1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

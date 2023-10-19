import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sekcja2Component } from './sekcja2.component';

describe('Sekcja2Component', () => {
  let component: Sekcja2Component;
  let fixture: ComponentFixture<Sekcja2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sekcja2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sekcja2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaMapaComponent } from './sekcja-mapa.component';

describe('SekcjaMapaComponent', () => {
  let component: SekcjaMapaComponent;
  let fixture: ComponentFixture<SekcjaMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekcjaMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SekcjaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocjaleComponent } from './socjale.component';

describe('SocjaleComponent', () => {
  let component: SocjaleComponent;
  let fixture: ComponentFixture<SocjaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocjaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocjaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

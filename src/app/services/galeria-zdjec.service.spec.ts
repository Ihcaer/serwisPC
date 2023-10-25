import { TestBed } from '@angular/core/testing';

import { GaleriaZdjecService } from './galeria-zdjec.service';

describe('GaleriaZdjecService', () => {
  let service: GaleriaZdjecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaZdjecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

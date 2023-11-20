import { TestBed } from '@angular/core/testing';

import { VerFilaService } from './ver-fila.service';

describe('VerFilaService', () => {
  let service: VerFilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerFilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

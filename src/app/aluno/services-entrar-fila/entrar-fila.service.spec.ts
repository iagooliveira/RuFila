import { TestBed } from '@angular/core/testing';

import { EntrarFilaService } from './entrar-fila.service';

describe('EntrarFilaService', () => {
  let service: EntrarFilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrarFilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

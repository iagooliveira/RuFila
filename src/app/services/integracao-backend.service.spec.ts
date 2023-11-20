import { TestBed } from '@angular/core/testing';

import { IntegracaoBackendService } from './integracao-backend.service';

describe('IntegracaoBackendService', () => {
  let service: IntegracaoBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracaoBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

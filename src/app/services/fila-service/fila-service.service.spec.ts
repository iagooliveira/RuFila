import { TestBed } from '@angular/core/testing';

import { FilaServiceService } from './fila-service.service';

describe('FilaServiceService', () => {
  let service: FilaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

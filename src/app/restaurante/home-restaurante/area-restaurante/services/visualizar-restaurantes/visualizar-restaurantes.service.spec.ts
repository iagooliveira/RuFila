import { TestBed } from '@angular/core/testing';

import { VisualizarRestaurantesService } from './visualizar-restaurantes.service';

describe('VisualizarRestaurantesService', () => {
  let service: VisualizarRestaurantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizarRestaurantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

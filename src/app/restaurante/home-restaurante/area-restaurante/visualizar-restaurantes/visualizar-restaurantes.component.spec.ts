import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarRestaurantesComponent } from './visualizar-restaurantes.component';

describe('VisualizarRestaurantesComponent', () => {
  let component: VisualizarRestaurantesComponent;
  let fixture: ComponentFixture<VisualizarRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarRestaurantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

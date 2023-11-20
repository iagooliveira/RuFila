import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRestauranteComponent } from './area-restaurante.component';

describe('AreaRestauranteComponent', () => {
  let component: AreaRestauranteComponent;
  let fixture: ComponentFixture<AreaRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

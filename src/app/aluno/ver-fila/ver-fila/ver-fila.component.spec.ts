import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFilaComponent } from './ver-fila.component';

describe('VerFilaComponent', () => {
  let component: VerFilaComponent;
  let fixture: ComponentFixture<VerFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

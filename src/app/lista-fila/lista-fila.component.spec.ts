import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilaComponent } from './lista-fila.component';

describe('ListaFilaComponent', () => {
  let component: ListaFilaComponent;
  let fixture: ComponentFixture<ListaFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

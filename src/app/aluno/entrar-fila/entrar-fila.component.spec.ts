import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarFilaComponent } from './entrar-fila.component';

describe('EntrarFilaComponent', () => {
  let component: EntrarFilaComponent;
  let fixture: ComponentFixture<EntrarFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgarCardapioComponent } from './divulgar-cardapio.component';

describe('DivulgarCardapioComponent', () => {
  let component: DivulgarCardapioComponent;
  let fixture: ComponentFixture<DivulgarCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivulgarCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivulgarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

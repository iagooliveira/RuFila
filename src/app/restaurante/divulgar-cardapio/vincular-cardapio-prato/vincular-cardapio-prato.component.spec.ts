import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularCardapioPratoComponent } from './vincular-cardapio-prato.component';

describe('VincularCardapioPratoComponent', () => {
  let component: VincularCardapioPratoComponent;
  let fixture: ComponentFixture<VincularCardapioPratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincularCardapioPratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularCardapioPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

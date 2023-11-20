import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCardapioComponent } from './area-cardapio.component';

describe('AreaCardapioComponent', () => {
  let component: AreaCardapioComponent;
  let fixture: ComponentFixture<AreaCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

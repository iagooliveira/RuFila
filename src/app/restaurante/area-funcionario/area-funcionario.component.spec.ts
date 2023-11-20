import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFuncionarioComponent } from './area-funcionario.component';

describe('AreaFuncionarioComponent', () => {
  let component: AreaFuncionarioComponent;
  let fixture: ComponentFixture<AreaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

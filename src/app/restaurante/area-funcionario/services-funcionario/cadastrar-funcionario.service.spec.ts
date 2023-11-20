import { TestBed } from '@angular/core/testing';

import { CadastrarFuncionarioService } from './cadastrar-funcionario.service';

describe('CadastrarFuncionarioService', () => {
  let service: CadastrarFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

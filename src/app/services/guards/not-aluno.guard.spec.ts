import { TestBed } from '@angular/core/testing';

import { NotAlunoGuard } from './not-aluno.guard';

describe('NotAlunoGuard', () => {
  let guard: NotAlunoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAlunoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

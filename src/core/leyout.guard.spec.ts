import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { leyoutGuard } from './leyout.guard';

describe('leyoutGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => leyoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

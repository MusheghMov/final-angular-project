import { TestBed } from '@angular/core/testing';

import { CanDeactivateUserChangesGuard } from './can-deactivate-user-changes.guard';

describe('CanDeactivateUserChangesGuard', () => {
  let guard: CanDeactivateUserChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateUserChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

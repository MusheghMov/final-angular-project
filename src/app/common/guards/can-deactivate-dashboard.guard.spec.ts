import { TestBed } from '@angular/core/testing';

import { CanDeactivateDashboardGuard } from './can-deactivate-dashboard.guard';

describe('CanDeactivateDashboardGuard', () => {
  let guard: CanDeactivateDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

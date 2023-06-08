import { TestBed } from '@angular/core/testing';

import { NotFoundGuardService } from './not-found-guard.service';

describe('NotFoundGuardService', () => {
  let service: NotFoundGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFoundGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

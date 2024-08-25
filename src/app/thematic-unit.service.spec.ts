import { TestBed } from '@angular/core/testing';

import { ThematicUnitService } from './thematic-unit.service';

describe('ThematicUnitService', () => {
  let service: ThematicUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThematicUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

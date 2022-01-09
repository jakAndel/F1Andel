import { TestBed } from '@angular/core/testing';

import { RaceDateService } from './race-date.service';

describe('RaceDateService', () => {
  let service: RaceDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RacesInSeasonService } from './races-in-season.service';

describe('RacesInSeasonService', () => {
  let service: RacesInSeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacesInSeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

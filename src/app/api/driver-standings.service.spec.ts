import { TestBed } from '@angular/core/testing';

import { DriversStandings } from './driver-standings.service';

describe('DriverStandingsService', () => {
  let service: DriversStandings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriversStandings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TeamStandingsService } from './team-standings.service';

describe('TeamStandingsService', () => {
  let service: TeamStandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamStandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

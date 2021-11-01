import { TestBed } from '@angular/core/testing';

import { FindingTeamsService } from './finding-teams.service';

describe('FindingTeamsService', () => {
  let service: FindingTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindingTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

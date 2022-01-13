import { TestBed } from '@angular/core/testing';

import { DriverinseasonsService } from './driverinseasons.service';

describe('DriverinseasonsService', () => {
  let service: DriverinseasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverinseasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

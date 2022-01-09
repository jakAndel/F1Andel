import { TestBed } from '@angular/core/testing';

import { PoradiService } from './poradi.service';

describe('PoradiService', () => {
  let service: PoradiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoradiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

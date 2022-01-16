import { TestBed } from '@angular/core/testing';

import { PitstopyService } from './pitstopy.service';

describe('PitstopyService', () => {
  let service: PitstopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitstopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

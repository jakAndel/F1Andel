import { TestBed } from '@angular/core/testing';

import { QTimesService } from './q-times.service';

describe('QTimesService', () => {
  let service: QTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

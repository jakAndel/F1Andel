import { TestBed } from '@angular/core/testing';

import { VysledkyZavoduService } from './vysledky-zavodu.service';

describe('VysledkyZavoduService', () => {
  let service: VysledkyZavoduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VysledkyZavoduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

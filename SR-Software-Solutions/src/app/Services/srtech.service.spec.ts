import { TestBed } from '@angular/core/testing';

import { SRTechService } from './srtech.service';

describe('SRTechService', () => {
  let service: SRTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OffCampusService } from './off-campus.service';

describe('OffCampusService', () => {
  let service: OffCampusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffCampusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

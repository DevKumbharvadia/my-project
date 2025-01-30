import { TestBed } from '@angular/core/testing';

import { AnandCampusService } from './anand-campus.service';

describe('AnandCampusService', () => {
  let service: AnandCampusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnandCampusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

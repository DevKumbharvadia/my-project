import { TestBed } from '@angular/core/testing';

import { ExtensionEducationService } from './extension-education.service';

describe('ExtensionEducationService', () => {
  let service: ExtensionEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtensionEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

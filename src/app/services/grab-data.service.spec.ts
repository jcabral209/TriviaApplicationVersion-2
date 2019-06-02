import { TestBed } from '@angular/core/testing';

import { GrabDataService } from './grab-data.service';

describe('GrabDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrabDataService = TestBed.get(GrabDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetByDistrictService } from './get-by-district.service';

describe('GetByDistrictService', () => {
  let service: GetByDistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetByDistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

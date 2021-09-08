import { TestBed } from '@angular/core/testing';

import { GetDistrictServiceService } from './get-district-service.service';

describe('GetDistrictServiceService', () => {
  let service: GetDistrictServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDistrictServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

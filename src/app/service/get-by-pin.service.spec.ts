import { TestBed } from '@angular/core/testing';

import { GetByPinService } from './get-by-pin.service';

describe('GetByPinService', () => {
  let service: GetByPinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetByPinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

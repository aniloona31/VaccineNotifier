import { TestBed } from '@angular/core/testing';

import { GetStatesServiceService } from './get-states-service.service';

describe('GetStatesServiceService', () => {
  let service: GetStatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

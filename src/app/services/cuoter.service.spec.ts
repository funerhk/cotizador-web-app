import { TestBed } from '@angular/core/testing';

import { CuoterService } from './cuoter.service';

describe('CuoterService', () => {
  let service: CuoterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

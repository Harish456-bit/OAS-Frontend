import { TestBed } from '@angular/core/testing';

import { DatatransferService } from './datatransfer.service';

describe('DatatransferService', () => {
  let service: DatatransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

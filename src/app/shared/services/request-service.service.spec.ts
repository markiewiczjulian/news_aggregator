import { TestBed } from '@angular/core/testing';

import { RequestService } from './request-service.service';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});

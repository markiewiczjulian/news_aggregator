import { TestBed } from '@angular/core/testing';

import { UiFacesService } from './ui-faces.service';

describe('UiFacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiFacesService = TestBed.get(UiFacesService);
    expect(service).toBeTruthy();
  });
});

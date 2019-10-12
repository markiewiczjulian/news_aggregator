import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UiFacesService } from './ui-faces.service';

describe('UiFacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClientTestingModule, HttpTestingController, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: UiFacesService = TestBed.get(UiFacesService);
    expect(service).toBeTruthy();
  });
});

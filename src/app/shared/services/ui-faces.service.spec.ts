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

  //TODO test method getAll
  xit(`method getAll should call httpClient get method with parameters from
    environment variables and parameters passed into a function`, () => {
    const service: UiFacesService = TestBed.get(UiFacesService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should should pipe the result and retrieve only articles
    from returned from server data`, () => {
    const service: UiFacesService = TestBed.get(UiFacesService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should in case of error call catchError method from same
    service`, () => {
    const service: UiFacesService = TestBed.get(UiFacesService);
    expect(service).toBeTruthy();
  });
});

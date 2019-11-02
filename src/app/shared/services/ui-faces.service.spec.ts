import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from '../environments/environment';

import { UiFacesService } from './ui-faces.service';

describe('UiFacesService', () => {
  let httpClient: HttpClient;
  let facesService: UiFacesService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClientTestingModule, HttpTestingController, HttpClient, HttpHandler]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    facesService = TestBed.get(UiFacesService);
  });

  it('should be created', () => {
    expect(facesService).toBeTruthy();
  });

  it(`method getAll should call httpClient get method with parameters from
    environment variables and parameters passed into a function`, () => {
    const facesUrl = environment.facesApiUrl;
    const headers = { headers: environment.facesHeaders };
    const spy = spyOn(httpClient, 'get').and.callFake(() => {
      return EMPTY;
    });
    facesService.getAll();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.argsFor(0)[0].trim()).toBe(facesUrl);
    expect(spy.calls.argsFor(0)[1]).toEqual(headers);
  });
});

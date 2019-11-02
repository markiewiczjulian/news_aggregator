import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EMPTY, of } from 'rxjs';
import { environment } from '../environments/environment';

import { Source } from '../models/source';
import { SourceNewsService } from './source-news.service';
import { SourceResponse } from '../models/sourceResponse';

describe('SourceNewsService', () => {
  let httpClient: HttpClient;
  let sourceService: SourceNewsService;
  const source: Source[] = [{
    id: '1',
    name: 'name',
    description: 'description',
    url: '1111.com',
    category: '3',
    language: 'EN',
    country: 'US'
  }];
  const sourceResponse: SourceResponse = {
    status: 'status',
    totalResults: 10,
    sources: source,
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    sourceService = TestBed.get(SourceNewsService);
  });

  it('should be created', () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });

  it(`method getAll should call httpClient get method with parameters from
  environment variables`, () => {
    const httpClientArgs =
      `${environment.newsApiUrl}/${sourceService.endpoint}?country=us&apiKey=${environment.newsToken}`;
    const spy = spyOn(httpClient, 'get').and.callFake(() => {
      return EMPTY;
    });
    sourceService.getAll();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(httpClientArgs);
  });

  it(`method getAll should should pipe the result and retrieve only sources
  from returned from server data`, () => {
    spyOn(httpClient, 'get').and.returnValue(of(sourceResponse));
    let result: any;
    sourceService.getAll().subscribe((data) => {
      result = data;
    });
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('1');
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SourceNewsService } from './source-news.service';

describe('SourceNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });

  //TODO test method getAll()
  xit(`method getAll should call httpClient get method with parameters from
  environment variables`, () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should should pipe the result and retrieve only sources
  from returned from server data`, () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should in case of error call catchError method from same
  service`, () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TopNewsService } from './top-news.service';

describe('TopNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpHandler, HttpClient, HttpClientTestingModule, HttpTestingController]
  }));

  it('should be created', () => {
    const service: TopNewsService = TestBed.get(TopNewsService);
    expect(service).toBeTruthy();
  });

  //TODO test method getAll
  xit(`method getAll should call httpClient get method with parameters from
  environment variables`, () => {
    const service: TopNewsService = TestBed.get(TopNewsService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should should pipe the result and retrieve only articles
  from returned from server data`, () => {
    const service: TopNewsService = TestBed.get(TopNewsService);
    expect(service).toBeTruthy();
  });

  xit(`method getAll should in case of error call catchError method from same
  service`, () => {
    const service: TopNewsService = TestBed.get(TopNewsService);
    expect(service).toBeTruthy();
  });
});

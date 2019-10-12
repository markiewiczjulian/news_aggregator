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
});

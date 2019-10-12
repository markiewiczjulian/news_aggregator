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
});

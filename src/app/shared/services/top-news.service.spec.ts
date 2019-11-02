import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EMPTY, of } from 'rxjs';
import { environment } from '../environments/environment';

import { TopNewsService } from './top-news.service';
import { Article } from '../models/article';
import { ArticleResponse } from '../models/articleResponse';

describe('TopNewsService', () => {
  let httpClient: HttpClient;
  let topNewsService: TopNewsService;
  const article: Article[] = [{
    source: {
      id: '1',
      name: 'name',
    },
    author: 'author',
    title: 'title',
    description: 'description',
    url: 'url',
    urlToImage: 'anotherUrl',
    publishedAt: 'publishedDate',
    content: 'content',
  }];
  const articleResponse: ArticleResponse = {
    status: 'status',
    totalResults: 10,
    articles: article,
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpHandler, HttpClient, HttpClientTestingModule, HttpTestingController]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    topNewsService = TestBed.get(TopNewsService);
  });

  it('should be created', () => {
    expect(topNewsService).toBeTruthy();
  });

  it(`method getAll should call httpClient get method with parameters from
  environment variables`, () => {
    const httpClientArgs =
      `${environment.newsApiUrl}/${topNewsService.endpoint}?country=us&apiKey=${environment.newsToken}`;
    const spy = spyOn(httpClient, 'get').and.callFake(() => {
      return EMPTY;
    });
    topNewsService.getAll();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(httpClientArgs);
  });

  it(`method getAll should should pipe the result and retrieve only articles
  from returned from server data`, () => {
    spyOn(httpClient, 'get').and.returnValue(of(articleResponse));
    let result: any;
    topNewsService.getAll().subscribe((data) => {
      result = data;
    });
    expect(result.length).toBe(1);
    expect(result[0].author).toBe('author');
  });
});

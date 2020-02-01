import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, EMPTY } from 'rxjs';

import { TopNewsComponent } from './top-news-component';
import { WeatherService } from '../shared/services/weather.service';
import { TopNewsService } from '../shared/services/top-news.service';
import { Article } from '../shared/models/article';
import { UiFacesService } from '../shared/services/ui-faces.service';
import { Face } from '../shared/models/face';


describe('TopNewsComponent', () => {
  let topNewsComponent: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;
  let topNewsService: TopNewsService;
  let facesService: UiFacesService;
  let exampleArticleArr: Article[];
  let exampleFacesArr: Face[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNewsComponent],
      imports: [],
      providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler, WeatherService, TopNewsService, UiFacesService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    topNewsComponent = fixture.componentInstance;
    topNewsComponent.ngOnInit = () => { };
    topNewsService = TestBed.get(TopNewsService);
    facesService = TestBed.get(UiFacesService);
    exampleArticleArr = [
      {
        source: {
          id: '1',
          name: 'article nr 1',
        },
        author: 'author of article nr 1',
        title: 'Article nr 1',
        description: 'This is example article nr 1',
        url: 'urlExample',
        urlToImage: 'urlExample',
        publishedAt: '12.01.2001',
        content: 'This is article example content...'
      },
      {
        source: {
          id: '2',
          name: 'article nr 2',
        },
        author: 'author of article nr 2',
        title: 'Article nr 2',
        description: 'This is example article nr 2',
        url: 'urlExample',
        urlToImage: 'urlExample',
        publishedAt: '12.01.2002',
        content: 'This is article example content...'
      }
    ];
    exampleFacesArr = [{
      name: 'face nr 1',
      email: 'email example',
      position: 'position',
      photo: 'some photo'
    }, {
      name: 'face nr 2',
      email: 'email example',
      position: 'position',
      photo: 'some photo'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(topNewsComponent).toBeTruthy();
  });

  it(`method getAllNews should call topNewsService and assign retrieved data to
    articles variable`, () => {
    const spy = spyOn(topNewsService, 'getAll').and.returnValue(of(exampleArticleArr));
    topNewsComponent.getAllNews();
    expect(spy).toHaveBeenCalled();
    expect(topNewsComponent.articles.length).toBe(2);
    expect(topNewsComponent.articles).toBe(exampleArticleArr);
  });

  it(`method getAllNews should on success call facesService with parameter of
  articles length`, () => {
    const facesServiceSpy = spyOn(facesService, 'getAll').and.callFake(() => {
      return EMPTY;
    });
    const topNewsServiceSpy = spyOn(topNewsService, 'getAll').and.returnValue(of(exampleArticleArr));
    topNewsComponent.getAllNews();
    expect(facesServiceSpy).toHaveBeenCalled();
    expect(facesServiceSpy).toHaveBeenCalledWith(2, undefined);
    expect(topNewsServiceSpy).not.toThrow();
  });

  it(`method getFaces should run with or without any passed parameters and then
  store result in faces variable `, () => {
    const facesServiceSpy = spyOn(facesService, 'getAll').and.returnValue(of(exampleFacesArr));
    topNewsComponent.getFaces(2);
    expect(facesServiceSpy).toHaveBeenCalled();
    expect(facesServiceSpy).toHaveBeenCalledWith(2, undefined);
    expect(topNewsComponent.faces).toBe(exampleFacesArr);
  });
});

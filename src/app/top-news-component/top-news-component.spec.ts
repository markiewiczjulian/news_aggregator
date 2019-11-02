import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNewsComponent } from './top-news-component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { WeatherService } from '../shared/services/weather.service';
import { TopNewsService } from '../shared/services/top-news.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('TopNewsComponent', () => {
  let topNewsComponent: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNewsComponent],
      imports: [],
      providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler, WeatherService, TopNewsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    topNewsComponent = fixture.componentInstance;
    topNewsComponent.ngOnInit = () => { };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(topNewsComponent).toBeTruthy();
  });

  //TODO test method getAllNews, getFaces and redirectToArticle
  xit(`method getAllNews should call topNewsService and assign retrieved data to
    articles variable`, () => {
    const service: TopNewsComponent = TestBed.get(TopNewsComponent);
    expect(service).toBeTruthy();
  });

  xit(`method getAllNews should on success call facesService with parameter of
  articles length`, () => {
    const service: TopNewsComponent = TestBed.get(TopNewsComponent);
    expect(service).toBeTruthy();
  });

  xit(`method getFaces should run with or without any passed parameters and then
  store result in faces variable `, () => {
    const service: TopNewsComponent = TestBed.get(TopNewsComponent);
    expect(service).toBeTruthy();
  });

  xit(`method redirectToArticle should change location of site to passed url`, () => {
    const service: TopNewsComponent = TestBed.get(TopNewsComponent);
    expect(service).toBeTruthy();
  });
});

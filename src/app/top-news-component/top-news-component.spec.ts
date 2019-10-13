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
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherWindowComponent } from '../shared/components/weather-window/weather-window.component';
import { TopNewsComponent } from './top-news-component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('TopNewsComponent', () => {
  let component: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNewsComponent, WeatherWindowComponent],
      imports: [],
      providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

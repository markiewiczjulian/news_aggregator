import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from '../../services/weather.service';
import { WeatherWindowComponent } from './weather-window.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WeatherWindowComponent', () => {
  let component: WeatherWindowComponent;
  let fixture: ComponentFixture<WeatherWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWindowComponent],
      providers: [HttpTestingController, HttpClientTestingModule, HttpClient, HttpHandler, WeatherService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function windDirectionParse should return \'-up\' when \'N\' string provided as parameter', () => {
    expect(component.windDirectionParse('N')).toEqual('-up');
  });
  it('function windDirectionParse should return \'-down\' when \'S\' string provided as parameter', () => {
    expect(component.windDirectionParse('S')).toEqual('-down');
  });
  it('function windDirectionParse should return \'-left\' when \'W\' string provided as parameter', () => {
    expect(component.windDirectionParse('W')).toEqual('-left');
  });
  it('function windDirectionParse should return \'-right\' when \'E\' string provided as parameter', () => {
    expect(component.windDirectionParse('E')).toEqual('-right');
  });
  it(`function windDirectionParse should return \'-down rotate-45-left\' when
  \'SSE\' or \'ESE\' or \'SE\' string provided as parameter`, () => {
    expect(component.windDirectionParse('SSE')).toEqual('-down rotate-45-left');
    expect(component.windDirectionParse('ESE')).toEqual('-down rotate-45-left');
    expect(component.windDirectionParse('SE')).toEqual('-down rotate-45-left');
  });
  it(`function windDirectionParse should return \'-up rotate-45-right\' when
  \'NNE\' or \'ENE\' or \'NE\' string provided as parameter`, () => {
    expect(component.windDirectionParse('NNE')).toEqual('-up rotate-45-right');
    expect(component.windDirectionParse('ENE')).toEqual('-up rotate-45-right');
    expect(component.windDirectionParse('NE')).toEqual('-up rotate-45-right');
  });
  it(`function windDirectionParse should return \'up rotate-45-left\' when
  \'NNW\' or \'WNW\' or \'NW\' string provided as parameter`, () => {
    expect(component.windDirectionParse('NNW')).toEqual('-up rotate-45-left');
    expect(component.windDirectionParse('WNW')).toEqual('-up rotate-45-left');
    expect(component.windDirectionParse('NW')).toEqual('-up rotate-45-left');
  });
  it(`function windDirectionParse should return \'-down rotate-45-right\' when
  \'SSW\' or \'WSW\' or \'SW\' string provided as parameter`, () => {
    expect(component.windDirectionParse('SSW')).toEqual('-down rotate-45-right');
    expect(component.windDirectionParse('WSW')).toEqual('-down rotate-45-right');
    expect(component.windDirectionParse('SW')).toEqual('-down rotate-45-right');
  });
  it('function windDirectionParse should return \'s-alt\' by default', () => {
    expect(component.windDirectionParse('NNNN')).toEqual('s-alt');
  });
});

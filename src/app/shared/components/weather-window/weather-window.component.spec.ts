import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherWindowComponent } from './weather-window.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { from, of, throwError, EMPTY } from 'rxjs';
import { Weather } from '../../models/weather';

describe('WeatherWindowComponent', () => {
  let weatherWindowComponent: WeatherWindowComponent;
  let fixture: ComponentFixture<WeatherWindowComponent>;
  let weatherService: WeatherService;
  const weatherObj: Weather = {
    data: [
      {
        rh: 1,
        pod: 'value',
        lon: 1,
        pres: 1,
        timezone: 'value',
        ob_time: 'value',
        country_code: 'value',
        clouds: 1,
        ts: 1,
        solar_rad: 1,
        state_code: 'value',
        city_name: 'value',
        wind_spd: 1,
        last_ob_time: 'value',
        wind_cdir_full: 'value',
        wind_cdir: 'value',
        slp: 1,
        vis: 1,
        h_angle: 1,
        sunset: 'value',
        dni: 1,
        dewpt: 1,
        snow: 1,
        uv: 1,
        precip: 1,
        wind_dir: 1,
        sunrise: 'value',
        ghi: 1,
        dhi: 1,
        aqi: 1,
        lat: 1,
        weather: {
          icon: 'value',
          code: 'value',
          description: 'value',
        },
        datetime: 'value',
        temp: 1,
        station: 'value',
        elev_angle: 1,
        app_temp: 1,
      }
    ],
    count: 1,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherWindowComponent],
      providers: [HttpTestingController, HttpClientTestingModule, HttpClient,
        HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWindowComponent);
    weatherWindowComponent = fixture.componentInstance;
    weatherService = TestBed.get(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(weatherWindowComponent).toBeTruthy();
  });

  it('function windDirectionParse should return \'-up\' when \'N\' string provided as parameter', () => {
    expect(weatherWindowComponent.windDirectionParse('N')).toEqual('-up');
  });

  it('function windDirectionParse should return \'-down\' when \'S\' string provided as parameter', () => {
    expect(weatherWindowComponent.windDirectionParse('S')).toEqual('-down');
  });

  it('function windDirectionParse should return \'-left\' when \'W\' string provided as parameter', () => {
    expect(weatherWindowComponent.windDirectionParse('W')).toEqual('-left');
  });

  it('function windDirectionParse should return \'-right\' when \'E\' string provided as parameter', () => {
    expect(weatherWindowComponent.windDirectionParse('E')).toEqual('-right');
  });

  it(`function windDirectionParse should return \'-down rotate-45-left\' when
  \'SSE\' or \'ESE\' or \'SE\' string provided as parameter`, () => {
    expect(weatherWindowComponent.windDirectionParse('SSE')).toEqual('-down rotate-45-left');
    expect(weatherWindowComponent.windDirectionParse('ESE')).toEqual('-down rotate-45-left');
    expect(weatherWindowComponent.windDirectionParse('SE')).toEqual('-down rotate-45-left');
  });

  it(`function windDirectionParse should return \'-up rotate-45-right\' when
  \'NNE\' or \'ENE\' or \'NE\' string provided as parameter`, () => {
    expect(weatherWindowComponent.windDirectionParse('NNE')).toEqual('-up rotate-45-right');
    expect(weatherWindowComponent.windDirectionParse('ENE')).toEqual('-up rotate-45-right');
    expect(weatherWindowComponent.windDirectionParse('NE')).toEqual('-up rotate-45-right');
  });

  it(`function windDirectionParse should return \'up rotate-45-left\' when
  \'NNW\' or \'WNW\' or \'NW\' string provided as parameter`, () => {
    expect(weatherWindowComponent.windDirectionParse('NNW')).toEqual('-up rotate-45-left');
    expect(weatherWindowComponent.windDirectionParse('WNW')).toEqual('-up rotate-45-left');
    expect(weatherWindowComponent.windDirectionParse('NW')).toEqual('-up rotate-45-left');
  });

  it(`function windDirectionParse should return \'-down rotate-45-right\' when
  \'SSW\' or \'WSW\' or \'SW\' string provided as parameter`, () => {
    expect(weatherWindowComponent.windDirectionParse('SSW')).toEqual('-down rotate-45-right');
    expect(weatherWindowComponent.windDirectionParse('WSW')).toEqual('-down rotate-45-right');
    expect(weatherWindowComponent.windDirectionParse('SW')).toEqual('-down rotate-45-right');
  });

  it('function windDirectionParse should return \'s-alt\' by default', () => {
    expect(weatherWindowComponent.windDirectionParse('NNNN')).toEqual('s-alt');
  });

  it('getWeather function should call the weather api and return weather data', () => {
    const serviceSpy = spyOn(weatherService, 'getWeather').and.returnValue(of(weatherObj));
    const windDirMethodSpy = spyOn(weatherWindowComponent, 'windDirectionParse');
    weatherWindowComponent.getWeather();
    expect(serviceSpy).toHaveBeenCalled();
    expect(weatherWindowComponent.weather).toBeTruthy();
    expect(windDirMethodSpy).toHaveBeenCalled();
  });

  it(`getWeather function should print in console with console.error message if
  an error is thrown`, () => {
    const serviceSpy = spyOn(weatherService, 'getWeather').and.throwError('error message');
    expect(serviceSpy).toThrowError();
    expect(weatherWindowComponent.weather).toBeFalsy();
  });
});

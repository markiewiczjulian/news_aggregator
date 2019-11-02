import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { environment } from '../environments/environment';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let httpClient: HttpClient;
  let weatherService: WeatherService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClientTestingModule, HttpTestingController, HttpClient, HttpHandler]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    weatherService = TestBed.get(WeatherService);
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it(`method getWeather should call httpClient get method with parameters from
  environment variables`, () => {
    const httpClientArgs = `${environment.weatherApiUrl}$?city=Warsaw&key=${environment.weatherToken}`;
    const spy = spyOn(httpClient, 'get').and.callFake(() => {
      return EMPTY;
    });
    weatherService.getWeather();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(httpClientArgs);
  });
});

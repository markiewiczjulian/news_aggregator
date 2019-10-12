import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClientTestingModule, HttpTestingController, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});

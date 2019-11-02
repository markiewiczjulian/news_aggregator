import { TestBed } from '@angular/core/testing';
import { environment } from '../environments/environment';

import { RequestService } from './request-service.service';

describe('RequestService', () => {
  let requestService: RequestService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RequestService]
  }));

  beforeEach(() => {
    requestService = TestBed.get(RequestService);
  });

  it('should be created', () => {
    expect(requestService).toBeTruthy();
  });

  it('method getNewsApiUrl should return news api url from environment variables', () => {
    const result = requestService.getNewsApiUrl();
    const expectedValue = environment.newsApiUrl;
    expect(result).toBe(expectedValue);
  });

  it('method getNewsToken should return weather token from environment variables', () => {
    const result = requestService.getNewsToken();
    const expectedValue = environment.newsToken;
    expect(result).toBe(expectedValue);
  });

  it('method getNewsHeaders should return news headers from environment variables', () => {
    const result = requestService.getNewsHeaders();
    const expectedValue = environment.newsHeaders;
    expect(result).toBe(expectedValue);
  });

  it('method getWeatherApiUrl should return weather api url from environment variables', () => {
    const result = requestService.getWeatherApiUrl();
    const expectedValue = environment.weatherApiUrl;
    expect(result).toBe(expectedValue);
  });

  it('method getWeatherToken should return weather token from environment variables', () => {
    const result = requestService.getWeatherToken();
    const expectedValue = environment.weatherToken;
    expect(result).toBe(expectedValue);
  });

  it('method getFacesApiUrl should return faces api url from environment variables', () => {
    const result = requestService.getFacesApiUrl();
    const expectedValue = environment.facesApiUrl;
    expect(result).toBe(expectedValue);
  });

  it('method getFacesHeaders should return weather headers from environment variables', () => {
    const result = requestService.getFacesHeaders();
    const expectedValue = environment.facesHeaders;
    expect(result).toBe(expectedValue);
  });
});

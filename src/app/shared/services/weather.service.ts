import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { RequestService } from '../services/request-service.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = this.requestService.getWeatherApiUrl();
  token = this.requestService.getWeatherToken();

  constructor(private httpClient: HttpClient, private requestService: RequestService) { }


  public getAll(): Observable<Weather> {
    return this.httpClient
      .get<Weather>(`${this.url}$?city=Warsaw&key=${this.token}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `API returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      `Error.\n${error.status} ${error.error}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestService } from './request-service.service';
import { Observable, throwError } from 'rxjs';
import { Source } from '../models/source';
import { SourceResponse } from '../models/sourceResponse';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourceNewsService {

  endpoint = 'sources';
  url = this.requestService.getNewsApiUrl();
  newsToken = this.requestService.getNewsToken();

  constructor(private httpClient: HttpClient, private requestService: RequestService) { }


  public getAll(): Observable<Source[]> {
    return this.httpClient
      .get<SourceResponse>(`${this.url}/${this.endpoint}?country=us&apiKey=${this.newsToken}`)
      .pipe(
        map(response => response.sources),
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

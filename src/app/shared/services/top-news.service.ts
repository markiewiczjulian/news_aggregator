import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RequestService } from './request-service.service';
import { Article } from '../models/article';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  endpoint = 'top-headlines';
  url = this.requestService.getNewsApiUrl();
  newsToken = this.requestService.getNewsToken();

  constructor(private httpClient: HttpClient, private requestService: RequestService) { }


  public getAll(): Observable<Article[]> {
    return this.httpClient
      .get<Response>(`${this.url}/${this.endpoint}?country=us&apiKey=${this.newsToken}`)
      .pipe(
        map(response => response.articles),
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

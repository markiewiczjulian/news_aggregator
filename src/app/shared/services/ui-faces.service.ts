import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestService } from './request-service.service';
import { Face } from '../models/face';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiFacesService {

  url = this.requestService.getFacesApiUrl();
  headers = this.requestService.getFacesHeaders();

  constructor(private httpClient: HttpClient, private requestService: RequestService) { }


  public getAll(amount?: number, emotion?: string): Observable<Face[]> {
    return this.httpClient
      .get<Face[]>(`${this.url}${amount || emotion ? '?' : ''}${amount ? 'limit=' + amount : ''}
      ${emotion && amount ? '&emotion[]=' + emotion : ''}`, { headers: this.headers })
      .pipe(
        map(response => response),
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

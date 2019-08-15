import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  private newsApiUrl = environment.newsApiUrl;
  private newsToken = environment.newsToken;
  private newsHeaders = environment.newsHeaders;
  private facesApiUrl = environment.facesApiUrl;
  private facesHeaders = environment.facesHeaders;

  public getNewsHeaders() {
    return this.newsHeaders;
  }

  public getNewsApiUrl() {
    return this.newsApiUrl;
  }

  public getNewsToken() {
    return this.newsToken;
  }

  public getFacesHeaders() {
    return this.facesHeaders;
  }

  public getFacesApiUrl() {
    return this.facesApiUrl;
  }

  constructor() { }
}

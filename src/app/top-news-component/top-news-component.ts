import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopNewsService } from '../shared/services/top-news.service';
import { Article } from '../shared/models/article';
import { DOCUMENT } from '@angular/common';
import { Face } from '../shared/models/face';
import { UiFacesService } from '../shared/services/ui-faces.service';

@Component({
  selector: 'app-top-news-component',
  templateUrl: './top-news-component.html',
  styleUrls: ['./top-news-component.css']
})
export class TopNewsComponent implements OnInit {

  articles: Article[];
  faces: Face[];

  constructor(private http: HttpClient, private topNewsService: TopNewsService,
    private facesService: UiFacesService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    this.topNewsService.getAll().subscribe(data => {
      this.articles = data;
      this.getFaces(this.articles.length);
    },
      (err: string) => {
        console.error(err);
      });
  }

  getFaces(amount?: number, emotion?: string) {
    this.facesService.getAll(amount, emotion).subscribe(data => {
      this.faces = data;
    },
      (err: string) => {
        console.error(err);
      });
  }

  redirectToArticle(url) {
    this.document.location.href = url;
  }
}

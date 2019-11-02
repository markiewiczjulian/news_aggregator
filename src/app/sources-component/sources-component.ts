import { Component, OnInit, Inject } from '@angular/core';
import { Source } from '../shared/models/source';
import { HttpClient } from '@angular/common/http';
import { SourceNewsService } from '../shared/services/source-news.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sources-component',
  templateUrl: './sources-component.html',
  styleUrls: ['./sources-component.css']
})
export class SourcesComponent implements OnInit {

  sources: Source[];

  constructor(private http: HttpClient, private sourceNewsService: SourceNewsService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.getAllSources();
  }

  getAllSources() {
    this.sourceNewsService.getAll().subscribe(data => {
      this.sources = data;
    },
      (err: string) => {
        console.error(err);
      });
  }

  redirectToSourceSite(url) {
    this.document.location.href = url;
  }
}

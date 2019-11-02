import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { SourcesComponent } from './sources-component';
import { of } from 'rxjs';
import { SourceNewsService } from '../shared/services/source-news.service';
import { SourceResponse } from '../shared/models/sourceResponse';
import { Source } from '../shared/models/source';

describe('SourcesComponent', () => {
  let sourcesComponent: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;
  let sourcesService: SourceNewsService;
  const source: Source[] = [{
    id: '1',
    name: 'name',
    description: 'description',
    url: '1111.com',
    category: '3',
    language: 'EN',
    country: 'US'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourcesComponent],
      providers: [HttpClientTestingModule, HttpTestingController, HttpClient,
        HttpHandler, SourceNewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesComponent);
    sourcesComponent = fixture.componentInstance;
    sourcesService = TestBed.get(SourceNewsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sourcesComponent).toBeTruthy();
  });

  it(`method getAllSources should call sourcesService and assign retrieved data to
  sources variable`, () => {
    let spy = spyOn(sourcesService, 'getAll').and.returnValue(of(source));
    sourcesComponent.getAllSources();
    expect(spy).toHaveBeenCalled();
    expect(sourcesComponent.sources).toBeTruthy();
    expect(sourcesComponent.sources[0].id).toBe('1');
  });
});

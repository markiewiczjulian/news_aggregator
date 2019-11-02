import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { SourcesComponent } from './sources-component';

describe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourcesComponent],
      providers: [HttpClientTestingModule, HttpTestingController, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesComponent);
    component = fixture.componentInstance;
    component.ngOnInit = () => { };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO test method getAllSources and redirectToSourceSite
  xit(`method getAllSources should call sourcesService and assign retrieved data to
  sources variable`, () => {
    const service: SourcesComponent = TestBed.get(SourcesComponent);
    expect(service).toBeTruthy();
  });

  xit(`method redirectToSourceSite should change location of site to passed url`, () => {
    const service: SourcesComponent = TestBed.get(SourcesComponent);
    expect(service).toBeTruthy();
  });
});

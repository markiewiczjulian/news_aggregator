import { TestBed } from '@angular/core/testing';

import { SourceNewsService } from './source-news.service';

describe('SourceNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceNewsService = TestBed.get(SourceNewsService);
    expect(service).toBeTruthy();
  });
});

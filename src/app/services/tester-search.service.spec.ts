import {TestBed} from '@angular/core/testing';

import {TesterSearchService} from './tester-search.service';

describe('TesterSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterSearchService = TestBed.get(TesterSearchService);
    expect(service).toBeTruthy();
  });
});

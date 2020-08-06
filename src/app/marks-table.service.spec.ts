import { TestBed } from '@angular/core/testing';

import { MarksTableService } from './marks-table.service';

describe('MarksTableService', () => {
  let service: MarksTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

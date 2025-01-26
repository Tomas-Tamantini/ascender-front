import { TestBed } from '@angular/core/testing';

import { SpreadsheetParserService } from './spreadsheet-parser.service';

describe('SpreadsheetParserService', () => {
  let service: SpreadsheetParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpreadsheetParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

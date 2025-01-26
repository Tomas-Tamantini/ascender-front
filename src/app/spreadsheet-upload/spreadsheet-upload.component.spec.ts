import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetUploadComponent } from './spreadsheet-upload.component';

describe('SpreadsheetUploadComponent', () => {
  let component: SpreadsheetUploadComponent;
  let fixture: ComponentFixture<SpreadsheetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpreadsheetUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadsheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

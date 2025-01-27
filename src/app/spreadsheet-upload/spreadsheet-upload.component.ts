import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import * as XLSX from 'xlsx';
import { SpreadsheetParserService } from './spreadsheet-parser.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-spreadsheet-upload',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './spreadsheet-upload.component.html',
  styleUrl: './spreadsheet-upload.component.css'
})
export class SpreadsheetUploadComponent {

  private readonly parser = inject(SpreadsheetParserService)
  spreadsheetLoaded = output<void>();


  onFileSelected(event: any): void {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      console.error('Please upload a single file.');
      return;
    }

    const file: File = target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binaryStr: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });

      workbook.SheetNames.forEach(sheetName => {
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        this.parser.parseSheet(sheetData as unknown[][]);
      });
      this.spreadsheetLoaded.emit();
    };

    reader.readAsArrayBuffer(file);
  }
}

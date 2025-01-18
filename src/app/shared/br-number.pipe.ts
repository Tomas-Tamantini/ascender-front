import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brNumber'
})
export class BrNumberPipe implements PipeTransform {
  transform(value: number | undefined | null, decimalPlaces: number): string {
    if (value == null || value == undefined) return '-';
    var parts = value.toFixed(decimalPlaces).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
  }
}

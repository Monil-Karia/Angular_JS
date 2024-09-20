import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipePipe implements PipeTransform {
  transform(value: number | null, conversionType: 'CtoF' | 'FtoC'): number | null {
    if (value === null || value === undefined) return null;

    if (conversionType === 'CtoF') {
      return (value * 9 / 5) + 32; // Celsius to Fahrenheit
    } else if (conversionType === 'FtoC') {
      return (value - 32) * 5 / 9; // Fahrenheit to Celsius
    }

    return null; // Default case
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCode',
  standalone: true
})
export class CharCodePipe implements PipeTransform {
  transform(value: number): string {
    return String.fromCharCode(value);
  }
}
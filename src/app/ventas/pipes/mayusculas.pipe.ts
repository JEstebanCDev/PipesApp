import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean = true): string {
    return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}

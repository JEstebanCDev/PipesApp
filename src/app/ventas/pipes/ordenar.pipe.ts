import { Pipe, PipeTransform } from '@angular/core';
import { Tabla } from '../interfaces/tabla.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(value: Tabla[], ordenaPor: string = 'sin valor'): Tabla[] {
    switch (ordenaPor) {
      case 'sin valor':
        return value;
        break;
      case 'nombre':
        value.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
        break;
      case 'cargo':
        value.sort((a, b) => (a.cargo > b.cargo ? 1 : -1));
        break;
      case 'edad':
        //varias formas de hacer el sort
        //value = value.sort((a,b)=>(a.edad>b.edad ? 1:-1));
        value = value.sort((a, b) => a.edad - b.edad);
        break;
      default:
        return value;
        break;
    }
    return value;
  }
}

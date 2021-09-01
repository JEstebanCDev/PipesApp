import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'estado',
})
export class EstadoPipe implements PipeTransform {
  transform(valor: boolean): string {
    return valor ? 'Activo' : 'Inactivo';
  }
}

import { Component } from '@angular/core';
import { cargo, Tabla } from '../../interfaces/tabla.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {

  ordernarPor='';

  lista: Tabla[] = [
    {
      nombre: 'Juan',
      edad: 23,
      cargo: cargo.ingeniero,
      estado:false,
    },
    {
      nombre: 'Camila',
      edad: 21,
      cargo: cargo.contador,
      estado:true,
    },
    {
      nombre: 'Danna',
      edad: 25,
      cargo: cargo.idiomas,
      estado:false,
    },
  ];

  estado: boolean = true;
  accion() {
    this.estado = !this.estado;
  }

  setOrdenTabla(valor:string){
    this.ordernarPor=valor;
  }
}

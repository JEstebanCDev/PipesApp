import { Component } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre:string ="Juan Esteban";
  genero:string='m';

  invitacionMapa={
    'm':'invitarlo',
    'f':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['María','Pedro','Juan','Carlos'];
  clientesMapa={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarInvitado(){
    this.nombre="Princesa Iryna";
    this.genero='f';
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona={
    nombre:'Juan',
    edad:22,
    direccion:'Av 123 -12'
  }

  //Json pipe
  heroes=[
    {
      nombre:'SpiderMan',
      poder:400
    },
    {
      nombre:'IronMan',
      poder:600
    },
    {
      nombre:'Capitan America',
      poder:800
    }
  ]

  //Async Pipe

  miObservable= interval(1000); //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('La promesa esta resuelta')
    }, 2500);
  });

}

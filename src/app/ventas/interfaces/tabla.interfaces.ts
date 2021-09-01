export enum cargo{
  ingeniero,contador,idiomas
}

export interface Tabla {
  nombre: string;
  edad: number;
  cargo: cargo;
  estado:boolean;
}

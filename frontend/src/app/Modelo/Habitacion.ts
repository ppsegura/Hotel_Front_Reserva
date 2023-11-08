import { Hotel } from "./Hotel";

export class Habitacion {
  id!: number;
  nombre!: string;
  numero!: number;
  tipo!: string;
  capacidad!: number;
  precio!: string;
  imagen!: string;
  hotel!: Hotel; 
}
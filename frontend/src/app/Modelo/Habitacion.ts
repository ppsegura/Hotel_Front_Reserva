import { Hotel } from "./Hotel";
import { TipoHabitacion } from "./TipoHabitacion";

export class Habitacion {
  id?: number;
  nombre!: string;
  numero!: number;
  tipoHabitacion!: TipoHabitacion;
  capacidad!: number;
  precio!: string;
  hotel!: Hotel;
  imagen!: string;
  imagen_id!: string;
  estado!: boolean;
}

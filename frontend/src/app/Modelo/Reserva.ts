import { Habitacion } from "./Habitacion";
import { Usuario } from "./Usuario";

export class Reserva{
id!: number;
fechaLlegada!:Date;
fechaSalida!:Date;
numeroHabitaciones!: number;
habitacion!: Habitacion;
usuario!: Usuario;
}

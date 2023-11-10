import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();

  habitaciones: Habitacion[]=[];

  usuarios: Usuario[]=[];

  constructor(private servicioService: ServicioService, private router : Router) { }

  ngOnInit(): void {
    this.obtenerHabitaciones();
    this.obtenerUsuarios();
  }

  obtenerHabitaciones() {
    this.servicioService.getHabitaciones().subscribe((data) => {
      this.habitaciones = data;
    });
  }

  obtenerUsuarios() {
    this.servicioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  registrarReserva():void{
    this.servicioService.createReserva(this.reserva)
    .subscribe(() => {
      this.router.navigate(['/listar-reserva']);
    });
  }

}

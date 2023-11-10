import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();

  habitaciones: Habitacion[] = [];

  usuarios: Usuario[] = [];

  constructor(private servicioService: ServicioService, 
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servicioService.getReservaId(id)
    .subscribe((data) => {
      this.reserva = data;

    });

    // Al iniciar el componente, obtener la lista de habitaciones desde el servicio
    this.servicioService.getHabitaciones().subscribe(data => {
      this.habitaciones = data;
      console.log(this.habitaciones);
    });

    // Al iniciar el componente, obtener la lista de usuarios desde el servicio
    this.servicioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });

    }

  actualizarReserva(): void {
    this.servicioService.updateReserva(this.reserva)
    .subscribe(() => {
      this.router.navigate(['/listar-reserva']);
    });
  }

}

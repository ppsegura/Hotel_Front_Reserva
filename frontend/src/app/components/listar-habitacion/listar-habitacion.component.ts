import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-listar-habitacion',
  templateUrl: './listar-habitacion.component.html',
  styleUrls: ['./listar-habitacion.component.css']
})
export class ListarHabitacionComponent implements OnInit {

habitaciones: Habitacion[] = [];

constructor(private servicioService: ServicioService, private router:Router){  }

ngOnInit(): void {
  this.servicioService.getHabitaciones()
  .subscribe(data => {
    this.habitaciones = data;
  });
}

eliminarHabitacion(id:number){
  this.servicioService.eliminarHabitacion(id)
  .subscribe(() => {
    // Vuelve a cargar la lista de habitaciones después de eliminar
    this.servicioService.getHabitaciones().subscribe(data => {
      this.habitaciones = data;
    });
  });
}


// Método para redirigir a la edición de habitación
editarHabitacion(id: number) {
  this.router.navigate(['/editar-habitacion', id]);
}


}

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
      // Convierte los valores de precio a números con punto decimal
        this.habitaciones = data.map(habitacion => {
        habitacion.precio = parseFloat(habitacion.precio.replace(',', '.')).toString();
        return habitacion;
      });
    });
}

eliminarHabitacion(id: number) {
  this.servicioService.eliminarHabitacion(id).subscribe(() => {
    // Después de eliminar la habitación, obtén las habitaciones actualizadas
    this.servicioService.getHabitaciones().subscribe((data) => {
      // Convierte los valores de precio a números con punto decimal
      this.habitaciones = data.map((habitacion) => {
        habitacion.precio = parseFloat(habitacion.precio.replace(',', '.')).toString();
        return habitacion;
      });
    });
  });
}


// Método para redirigir a la edición de habitación
editarHabitacion(id: number) {
  this.router.navigate(['/editar-habitacion', id]);
}


}

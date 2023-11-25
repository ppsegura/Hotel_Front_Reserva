import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Hotel } from 'src/app/Modelo/Hotel';
import { TipoHabitacion } from 'src/app/Modelo/TipoHabitacion';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar-habitacion',
  templateUrl: './editar-habitacion.component.html',
  styleUrls: ['./editar-habitacion.component.css']
})
export class EditarHabitacionComponent implements OnInit {

  h: Habitacion = new Habitacion();
  imagen!: File;

  hoteles: Hotel[] = [];
  tipohabitacion: TipoHabitacion[] = [];  // Cambiado a un array

  constructor(
    private servicioService: ServicioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servicioService.getHabitacionId(id)
      .subscribe((data) => {
        this.h = data;
        // Convierte el valor de precio a un formato con punto decimal
        this.h.precio = parseFloat(this.h.precio.replace(',', '.')).toString();
      });

    // Al iniciar el componente, obtener la lista de hoteles desde el servicio
    this.servicioService.getHoteles().subscribe(data => {
      this.hoteles = data;
      console.log(this.hoteles);
    });

    this.servicioService.getTipoHabitacion()
      .subscribe(data => {
        this.tipohabitacion = data;  // Cambiado a asignar la lista completa
      });
  }

  actualizarHabitacion(habitacion: Habitacion): void {
    if (this.imagen) {
      this.servicioService.updateHabitacion(this.imagen, habitacion).subscribe({
        next: (data) => {
          this.h = data;
          alert("Se Actualizó con Éxito...!!!");
          this.router.navigate(["listar-habitacion"]);
        },
        error: (err) => {
          console.error("Error al actualizar la habitacion:", err);
        },
      });
    } else {
      console.warn("No hay una nueva imagen seleccionada");
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagen = file;
  }
}

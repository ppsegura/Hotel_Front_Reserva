import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Hotel } from 'src/app/Modelo/Hotel';
import { TipoHabitacion } from 'src/app/Modelo/TipoHabitacion';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-registrar-habitacion',
  templateUrl: './registrar-habitacion.component.html',
  styleUrls: ['./registrar-habitacion.component.css']
})
export class RegistrarHabitacionComponent implements OnInit {

  habitacion: Habitacion = new Habitacion();

  hotel: Hotel[]=[];
  imagen!: File;
  tipohabitacion: TipoHabitacion[]=[];

  constructor(private servicioService: ServicioService, private router: Router){ }

  ngOnInit(){

    // Al iniciar el componente, obtener la lista de hoteles desde el servicio
    this.servicioService.getHoteles()
    .subscribe((data) => {
      console.log(data);
      this.hotel=data||[];
    });

    this.servicioService.getTipoHabitacion()
    .subscribe(data => {
      this.tipohabitacion = data;
    });
  }

  registrarHabitacion() : void{

    if (!this.imagen) {
      console.error('Seleccione una imagen'); // Manejo básico de error si no se selecciona una imagen
      return;
    }
    this.servicioService.createHabitacion(this.imagen, this.habitacion)
    .subscribe({
      next: (response) => {
        //Manejar respuesta existosa
        console.log('Registro exitoso:', response);
        //Se redirige a listar habitacion
        this.router.navigate(["/listar-habitacion"]);
      },
      error: (error) =>{
        //Manejo de errores
        console.error('Error al registrar', error);
      }
    });
  }

  onFileChange(event: any) {
    this.imagen = event.target.files[0];
  }


}

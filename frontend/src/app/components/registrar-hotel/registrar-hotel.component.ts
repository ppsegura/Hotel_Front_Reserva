import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/Modelo/Hotel';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-registrar-hotel',
  templateUrl: './registrar-hotel.component.html',
  styleUrls: ['./registrar-hotel.component.css']
})
export class RegistrarHotelComponent implements OnInit {

  imagen!: File;
  hoteles : Hotel = new Hotel();


  constructor(private router:Router, private servicio:ServicioService) {}

  ngOnInit(): void {}

  Guardar(): void {

    if (!this.imagen) {
      console.error('Seleccione una imagen'); // Manejo básico de error si no se selecciona una imagen
      return;
    }

    this.servicio.createHotel(this.imagen, this.hoteles)
      .subscribe({
        next: (response) => {
          // Maneja la respuesta exitosa
          console.log('Registro exitoso:', response);
          // Puedes redirigir a otra página después del éxito si es necesario
          this.router.navigate(['/listar-hotel']);
        },
        error: (error) => {
          // Maneja el error
          console.error('Error al registrar:', error);
        }
      });
  }

  onFileChange(event: any) {
    this.imagen = event.target.files[0];
  }

}

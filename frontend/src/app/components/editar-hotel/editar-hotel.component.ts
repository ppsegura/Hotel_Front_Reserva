import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/Modelo/Hotel';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar-hotel',
  templateUrl: './editar-hotel.component.html',
  styleUrls: ['./editar-hotel.component.css']
})
export class EditarHotelComponent implements OnInit {

  hoteles : Hotel = new Hotel();
  imagen!: File; // Variable para almacenar la nueva imagen

  constructor(private router:Router, private servicio:ServicioService){ }

  ngOnInit() {
    this.ObtenerEditar();
  }

  ObtenerEditar(){
    let id = localStorage.getItem("id");
    if (id != null) {
      this.servicio.getHotelId(+id)
        .subscribe(data => {
          console.log(data);
          this.hoteles = data;
        });
    }
  }

  // Método para manejar la selección de la nueva imagen
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagen = file;
  }

  Actualizar(hotel: Hotel) {
    if (this.imagen) {
      // Llama a updateHotel pasando la imagen y el hotel
      this.servicio.updateHotel(this.imagen, hotel)
        .subscribe(
          data => {
            this.hoteles = data;
            alert("Se Actualizó con Éxito...!!!");
            this.router.navigate(["listar-hotel"]);
          },
          error => {
            console.error("Error al actualizar el hotel:", error);
            // Agregar lógica para manejar el error (por ejemplo, mostrar un mensaje al usuario)
          }
      );
    } else {
      // Agregar lógica para manejar el caso en que no haya una nueva imagen seleccionada
      console.warn("No hay una nueva imagen seleccionada");
    }
  }
}

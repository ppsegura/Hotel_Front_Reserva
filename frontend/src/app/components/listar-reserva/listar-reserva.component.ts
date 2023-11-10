import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/Modelo/Reserva';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

reservas : Reserva[] = [];

constructor(private servicioService: ServicioService, private router:Router){ }
  
  ngOnInit(): void {
    this.servicioService.getReservas()
    .subscribe(data => {
      this.reservas = data;
    })
  }

  eliminarReserva(id:number){
    this.servicioService.eliminarReserva(id)
    .subscribe(() => {
      // Vuelve a cargar la lista de habitaciones después de eliminar
      this.servicioService.getReservas()
      .subscribe(data => {
        this.reservas = data;
      });
    });
  }

// Método para redirigir a la edición de Reserva
editarReserva(id: number) {
  this.router.navigate(['/editar-reserva', id]);
}


}

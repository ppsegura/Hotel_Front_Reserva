import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Hotel } from 'src/app/Modelo/Hotel';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-registrar-habitacion',
  templateUrl: './registrar-habitacion.component.html',
  styleUrls: ['./registrar-habitacion.component.css']
})
export class RegistrarHabitacionComponent implements OnInit {

  habitacion: Habitacion = new Habitacion();

  hoteles: Hotel[]=[];

  constructor(private servicioService: ServicioService, private router: Router){ }

  ngOnInit(){
    // Al iniciar el componente, obtener la lista de hoteles desde el servicio
    this.servicioService.getHoteles()
    .subscribe(data => {
      this.hoteles = data;
    });
  }

  registrarHabitacion() : void{
    this.servicioService.createHabitacion(this.habitacion)
    .subscribe(() => {
      this.router.navigate(["/listar-habitacion"]);
    })
  }

}

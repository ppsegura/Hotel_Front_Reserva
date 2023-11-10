import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Hotel } from 'src/app/Modelo/Hotel';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar-habitacion',
  templateUrl: './editar-habitacion.component.html',
  styleUrls: ['./editar-habitacion.component.css']
})
export class EditarHabitacionComponent implements OnInit {

  habitacion : Habitacion = new Habitacion;

  hoteles: Hotel[]=[];

  constructor(
    private servicioService: ServicioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
    this.servicioService.getHabitacionId(id)
    .subscribe((data) => {
      this.habitacion = data;

    });

    // Al iniciar el componente, obtener la lista de hoteles desde el servicio
    this.servicioService.getHoteles().subscribe(data => {
      this.hoteles = data;
      console.log(this.hoteles);
    });

    }

    actualizarHabitacion(): void {
      this.servicioService.updateHabitacion(this.habitacion).subscribe(() => {
        this.router.navigate(['/listar-habitacion']);
      });
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/Modelo/Hotel';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-listar-hotel',
  templateUrl: './listar-hotel.component.html',
  styleUrls: ['./listar-hotel.component.css']
})
export class ListarHotelComponent implements OnInit{

  hoteles:Hotel[] =[] ;

  constructor(private servicio: ServicioService, private router:Router){}

  ngOnInit() {
    this.servicio.getHoteles()
    .subscribe((data) => {
      console.log(data);
      this.hoteles=data||[];
    });
  }
// EDITAR => PARA LANZAR AL COMPONENT EDITAR Y AGARRAR LOS DATOS POR EL ID PARA PODER ACTUALZIAR DESDE ALLA
  Editar(hotel:Hotel){
      localStorage.setItem("id",hotel.id.toString());
      this.router.navigate(["editar-hotel"])
  }

  Eliminar(hotel:Hotel){
    this.servicio.eliminarHotel(hotel)
    .subscribe(data => {
      this.hoteles=this.hoteles.filter(h => h! == hotel);
      alert("Hotel Eliminado Satisfactoriamente....!!!!")
      this.router.navigate(["listar-hotel"])
    })
  }


}

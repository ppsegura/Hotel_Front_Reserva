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

  hotel: Hotel = new Hotel();

  constructor(private router:Router, private servicio:ServicioService){ }

  ngOnInit() {
    this.ObtenerEditar();
  }

  ObtenerEditar(){
    
    let id = localStorage.getItem("id");
    /*AGREGAMOS EL IF PARA QUE NO ACEPTE QUE SEA NULL ANTES DE ACCEDER A LA PROPIEDAD ID*/ 
    if (id != null) {
     
      this.servicio.getHotelId(+id)
    .subscribe(data =>{
      console.log(data);
      this.hotel=data;
    })
  }
}

Actualizar(hotel:Hotel){
  this.servicio.updateHotel(hotel)
  .subscribe(data => {
    this.hotel = data;
    alert("Se Actualizo con Éxito...!!!");
    this.router.navigate(["listar-hotel"]);
  })
}


}

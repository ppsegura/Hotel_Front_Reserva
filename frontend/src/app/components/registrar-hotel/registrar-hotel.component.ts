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

  nuevoHotel : Hotel = new Hotel();

  constructor(private router:Router, private servicio:ServicioService) {}

  ngOnInit(): void {}

  Guardar(){
    this.servicio.createHotel(this.nuevoHotel)
    .subscribe(data =>{
      alert("Se agrego hotel con éxito...!!!");
      this.router.navigate(["listar-hotel"]);
    })
  }

}

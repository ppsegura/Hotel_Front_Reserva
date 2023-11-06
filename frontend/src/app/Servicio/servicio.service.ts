import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../Modelo/Hotel';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  // PARA MANTENIMIENTO EN SERVICIO PARA HOTEL

  Url = 'http://localhost:8080/hotel';

  getHoteles() {
    return this.http.get<Hotel[]>(this.Url);
  }

  createHotel(hotel:Hotel){
    return this.http.post<Hotel>(this.Url,hotel);
  }

  getHotelId(id:number){
    return this.http.get<Hotel>(this.Url+"/"+id);
  }

  updateHotel(hotel:Hotel){
    return this.http.put<Hotel>(this.Url+"/"+hotel.id,hotel);
  }

  eliminarHotel(hotel:Hotel){
    return this.http.delete<Hotel>(this.Url+"/"+hotel.id);
  }

}

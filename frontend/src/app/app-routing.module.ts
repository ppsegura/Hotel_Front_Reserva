import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHotelComponent } from './components/listar-hotel/listar-hotel.component';
import { RegistrarHotelComponent } from './components/registrar-hotel/registrar-hotel.component';
import { EditarHotelComponent } from './components/editar-hotel/editar-hotel.component';
import { ListarHabitacionComponent } from './components/listar-habitacion/listar-habitacion.component';
import { RegistrarHabitacionComponent } from './components/registrar-habitacion/registrar-habitacion.component';
import { EditarHabitacionComponent } from './components/editar-habitacion/editar-habitacion.component';

const routes: Routes = [
  //HOTEL
  {path:'listar-hotel', component: ListarHotelComponent},
  {path:'registrar-hotel', component: RegistrarHotelComponent},
  {path:'editar-hotel',component:EditarHotelComponent},
  //HABITACION
  { path: 'listar-habitacion', component: ListarHabitacionComponent },
  { path: 'registrar-habitacion', component: RegistrarHabitacionComponent },
  { path: 'editar-habitacion/:id', component: EditarHabitacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

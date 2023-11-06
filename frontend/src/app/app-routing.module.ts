import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHotelComponent } from './components/listar-hotel/listar-hotel.component';
import { RegistrarHotelComponent } from './components/registrar-hotel/registrar-hotel.component';
import { EditarHotelComponent } from './components/editar-hotel/editar-hotel.component';

const routes: Routes = [
  {path:'listar-hotel', component: ListarHotelComponent},
  {path:'registrar-hotel', component: RegistrarHotelComponent},
  {path:'editar-hotel',component:EditarHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

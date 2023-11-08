import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListarHotelComponent } from './components/listar-hotel/listar-hotel.component';
import { RegistrarHotelComponent } from './components/registrar-hotel/registrar-hotel.component';

import {ServicioService} from './Servicio/servicio.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditarHotelComponent } from './components/editar-hotel/editar-hotel.component';
import { ListarHabitacionComponent } from './components/listar-habitacion/listar-habitacion.component';
import { RegistrarHabitacionComponent } from './components/registrar-habitacion/registrar-habitacion.component';
import { EditarHabitacionComponent } from './components/editar-habitacion/editar-habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ListarHotelComponent,
    RegistrarHotelComponent,
    EditarHotelComponent,
    ListarHabitacionComponent,
    RegistrarHabitacionComponent,
    EditarHabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

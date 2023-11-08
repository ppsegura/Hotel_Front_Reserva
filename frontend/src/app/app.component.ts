import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar-hotel"]);
  }

  Registrar(){
    this.router.navigate(["registrar-hotel"]);
  }

  RegistrarHabitacion(){
    this.router.navigate(["registrar-habitacion"])
  }

}



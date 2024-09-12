import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontProductos';

  ///Crear constructor -- tipo fr especial para incializar atb y met

  constructor(private router:Router){}

  //Declarar el procedimiento de la navegacion
  abrirComListar(){
    this.router.navigate(["listar"]);
  }

  abrirComGuardar(){
    this.router.navigate(["guardar"]);
  }





}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/Model/Productos';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  //Declarar objeto
  producto:Productos = new Productos();
  ////constructor
  constructor(private router:Router, private servicio:ServicioService){}

  //Declarar el metodo a guardar
  guardar(){
    this.servicio.guardaP(this.producto).subscribe(data=>{
      console.log("correcto")
      this.router.navigate(["listar"]);
    })
  }

}

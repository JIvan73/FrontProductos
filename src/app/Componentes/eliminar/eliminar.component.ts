import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/Model/Productos';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor(private router:Router, private servicio:ServicioService){}

  producto:Productos = new Productos();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let idP = localStorage.getItem("idP");
    this.producto.idP = Number(idP);

    this.servicio.buscarP(this.producto).subscribe(data=>{
      this.producto = data;
      console.log(data);
    })
  }

  eliminar(){
    this.servicio.eliminarP(this.producto).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }

}

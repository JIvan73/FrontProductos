import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/Model/Productos';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private router:Router, private servicio:ServicioService){}

  /////Declarar la variable de tipo objeto
  producto:Productos = new Productos();


  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let idP = localStorage.getItem("idP");
    this.producto.idP = Number(idP);

    ////consumir servicio de buscar
    this.servicio.buscarP(this.producto).subscribe(data=>{
      this.producto = data;
    })
  }

  editar(){
    this.servicio.editarP(this.producto).subscribe(data=>{
      this.router.navigate(["listar"]);
    })
  }




}

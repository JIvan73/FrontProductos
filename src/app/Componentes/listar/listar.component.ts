import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/Model/Productos';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  //////////Se agrega logica del componente
  //Declarar variable de tipo coleccion de objetos
  listarRegistros:Productos [];

  ///Declarando constructor
  constructor(private router:Router, private servicio:ServicioService){}
  /////cuando se declara ngOnInit se ejecuta al cargar el componente

  ngOnInit():void{
    ///Recibir respuesta del servidor
    this.servicio.listarP().subscribe(data=>{
      this.listarRegistros=data;
      console.log(data);
    })
  }

  ////Enviar el valor del ID, se muestra el componente de Editar
  abrirComEditarEnviarId(producto:Productos){
    localStorage.setItem("idP",producto.idP.toString());
    this.router.navigate(["editar"]);
  }


  abrirComElimEnviarId(producto:Productos){
    localStorage.setItem("idP",producto.idP.toString());
    this.router.navigate(["eliminar"]);
  }




}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../Model/Productos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  ///Se agrega parametro al constructor para agregar las peticiones utilizando el protocolo http
  constructor(private http:HttpClient) { }

  ///Declarar las variables para las URLs
  urlListar="http://localhost:9000/ProductosWs/listar";
  urlGuardar="http://localhost:9000/ProductosWs/guardar";
  urlBuscar="http://localhost:9000/ProductosWs/buscar";
  urlEditar="http://localhost:9000/ProductosWs/editar";
  urlEliminar="http://localhost:9000/ProductosWs/eliminar";


  ///Metodos para invocar los endpoint o urls
  listarP(){
    ////ajax metodologia de trabajo asincrono
    return this.http.get<Productos[]>(this.urlListar);
  }

  guardaP(producto:Productos){
    return this.http.post(this.urlGuardar,producto,{responseType:'text'});
  }

  buscarP(producto:Productos){
    return this.http.post<Productos>(this.urlBuscar,producto);
  }

  editarP(producto:Productos){
    return this.http.post(this.urlEditar,producto,{responseType:'text'});
  }

  eliminarP(producto:Productos){
    return this.http.post(this.urlEliminar,producto, {responseType:'text'});
  }


}

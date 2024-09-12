import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';


///Arrego de rutas necesario para consumir una web service y para invocar los componentes
const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'guardar',component:GuardarComponent},
  {path:'editar', component:EditarComponent},
  {path:'eliminar', component:EliminarComponent}
];



///Es una clase que configura el inyector y compilador de un componente
////para que otros componentes externos puedan utilizarlos
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

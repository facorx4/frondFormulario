import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { Global } from  '../../services/global';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  public empleados: Empleado[];
  public url: string;

  constructor(
    private _empleadoService: EmpleadoService

  ) 

{

  this.url = Global.url;
}

   

  ngOnInit(): void {
   this._empleadoService.getEmpleados().subscribe(
response =>{

  if(response.empleados){
this.empleados = response.empleados;

  }else{
    
  }


},
error =>{
console.log(error);

}

   );
  }

}

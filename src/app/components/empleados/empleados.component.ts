import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(
    private _empleadoService: EmpleadoService

  ) 

{}

   

  ngOnInit(): void {
   this._empleadoService.getEmpleados().subscribe(
response =>{
console.log(response);

},
error =>{
console.log(error);

}

   );
  }

}

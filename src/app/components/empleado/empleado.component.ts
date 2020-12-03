import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Global } from '../../services/global';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public url: string;

  constructor(
    private _empleadoService: EmpleadoService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.url = Global.url


  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._empleadoService.getEmpleado(id).subscribe(
        response => {
          if (response.empleado) {
            this.empleado = response.empleado;

          } else {

            this._router.navigate(['/formulario']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/formulario']);
        }

      );

    });

  }

  delete(id) {

    swal({
      title: "¿Esta seguro de eliminar el empleado?",
      text: "Una vez borrado el empleado no se podra recuperar!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true
    })
      .then((willDelete) => {

        if (willDelete) {
          this._empleadoService.delete(id).subscribe(
            response => {
              swal("El empleado ha sido borrado!", {
                icon: "success",
              });
              this._router.navigate(['/empleados']);
            },
            error => {
              console.log(error);
              this._router.navigate(['/empleados']);

            }

          );
         
        } else {
          swal("El empleado no ha sido borrado  !");
        }
      });

  }


}

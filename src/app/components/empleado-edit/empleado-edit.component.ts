import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: '../formulario/formulario.component.html',
  styleUrls: ['./empleado-edit.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoEditComponent implements OnInit {
  public empleado: Empleado;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .git , .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image'

    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'sube la foto del empleado',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService


  ) {


    this.empleado = new Empleado('','', null , '', '','','', null,'','',null,'','','','');
    this.is_edit = true;
    this.page_title = 'Editar Empleado';
    this.url = Global.url;
    

  }

  ngOnInit(): void {
this.getEmpleado();

  }

  onSubmit() {
    this._empleadoService.update(this.empleado._id,this.empleado).subscribe(
      response => {
        if (response.status == 'success') {

          this.status = 'success';
          this.empleado = response.empleado;


 //alert

 swal(
  'Empleado Editado',
  'El empleado se ha editado correctamente',
  'success'

);

          this._router.navigate(['/empleado', this.empleado._id]);
        } else {

          this.status = 'error';
        }

      },
      error => {
        console.log(error);
        this.status = 'error';
        swal(
          'Edición Fallida',
          'El empleado no se ha editado correctamente',
          'error'
        
        );

      }
    );

  }

  imageUpload(data){

    let image_data = JSON.parse(data.response);
    this.empleado.image = image_data.image;
  }

  getEmpleado(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._empleadoService.getEmpleado(id).subscribe(
        response => {
          if(response.empleado){
            this.empleado = response.empleado;

          }else{

            this._router.navigate(['/formulario']);
          }
        },
        error =>{
          console.log(error);
          this._router.navigate(['/formulario']);
        }

      );

    });


  }

}

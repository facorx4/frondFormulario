import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [EmpleadoService]
})
export class FormularioComponent implements OnInit {

  public empleado: Empleado;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .git, .jpeg",
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
      //sizeLimit: 'Size Limit'
    }
  };


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService

  ) {


    this.empleado = new Empleado('','', null , '', '','','', null,'','',null,'','','','');
    this.is_edit = false;
    this.page_title = 'Formulario';

  }

  ngOnInit() {
  }
  onSubmit() {
    this._empleadoService.create(this.empleado).subscribe(
      response => {
        if (response.status == 'success') {

          this.status = 'success';
          this.empleado = response.empleado;

          //alert

          swal(
            'Empleado Creado',
            'El empleado se ha creado correctamente',
            'success'

          );
          this._router.navigate(['/empleados']);
        } else {

          this.status = 'error';
        }

      },
      error => {
        console.log(error);
        this.status = 'error';

      }
    );

  }

  imageUpload(data) {

    let image_data = JSON.parse(data.response);
    this.empleado.image = image_data.image;
  }
}

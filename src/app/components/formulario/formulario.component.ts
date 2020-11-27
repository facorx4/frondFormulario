import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  constructor() {
    this.user = {
      tipo_documento: '',
      cedula: '',
      nombre: '',
      apellidos: '',
      genero: '',
      cargo: '',
      contrato: '',
      tipo_contrato: '',
      ingreso: '',
      sueldo: '',
      eps: '',
      arl: '',
      observaciones: ''
    };
  }

  ngOnInit(): void {
  }

onSubmit(){
  alert("formulario enviado");
  console.log(this.user);
}

}

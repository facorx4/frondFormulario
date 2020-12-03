import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { Global } from "../../services/global";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  public url: string;

  @Input() empleados: Empleado[];
  constructor() { 
this.url = Global.url;

  }

  ngOnInit(): void {
  }

}

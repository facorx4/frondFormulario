import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Global } from './global';

@Injectable()

export class EmpleadoService {

    public url: string;


    constructor(
        
        
        private _http: HttpClient)

        
         { 
this.url = Global.url;

        }
   
    pruebas(){
return "soy el servicio de empleados";

    }

    getEmpleados():Observable<any>{
return this._http.get(this.url+'empleados');

    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Global } from './global';

@Injectable()

export class EmpleadoService {

    public url: string;


    constructor(


        private _http: HttpClient) {
        this.url = Global.url;

    }

    pruebas() {
        return "soy el servicio de empleados";

    }

    getEmpleados(): Observable<any> {
        return this._http.get(this.url + 'empleados');

    }

    getEmpleado(empleadoId): Observable<any> {

        return this._http.get(this.url + 'empleado/' + empleadoId);

    }

    create(empleado): Observable<any> {
        let params = JSON.stringify(empleado);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save', params, { headers: headers });

    }


    update(id, empleado): Observable<any> {
        let params = JSON.stringify(empleado);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'empleado/' + id, params, { headers: headers });


    }


    delete(id):Observable<any>{

        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'empleado/' + id, { headers: headers });


    }
}
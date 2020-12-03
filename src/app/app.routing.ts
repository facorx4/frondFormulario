// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componenetes a los cuales quiero hacer pagina exclusiva 

import { FormularioComponent } from './components/formulario/formulario.component';
import {  EmpleadosComponent } from './components/empleados/empleados.component';
import { ErrorComponent} from './components/error/error.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';


//Array de rutas

const appRoutes: Routes =[
{path:'',component: FormularioComponent},
{path:'formulario',component: FormularioComponent},
{path:'editar/:id',component: EmpleadoEditComponent},
{path:'empleados',component: EmpleadosComponent},
{path:'empleado/:id', component: EmpleadoComponent},
{path:'**',component: ErrorComponent},   
{path:'empleado/editar/:id',component: EmpleadoEditComponent},
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
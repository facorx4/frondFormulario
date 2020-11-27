// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componenetes a los cuales quiero hacer pagina exclusiva 

import { FormularioComponent } from './components/formulario/formulario.component';
import {  EmpleadosComponent } from './components/empleados/empleados.component';
import { ErrorComponent} from './components/error/error.component';

//Array de rutas

const appRoutes: Routes =[
{path:'',component: FormularioComponent},
{path:'formulario',component: FormularioComponent},
{path:'empleados',component: EmpleadosComponent},
{path:'**',component: ErrorComponent},   
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
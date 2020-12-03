import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from  './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ErrorComponent } from './components/error/error.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    EmpleadosComponent,
    ErrorComponent,
    FuncionariosComponent,
    EmpleadoComponent,
    EmpleadoEditComponent,
  
   
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

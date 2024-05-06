import { Component } from '@angular/core';
import { MostrarCorreoComponent } from '../correo/mostrar-correo/mostrar-correo.component';
import { FormularioComponent } from '../correo/formulario/formulario.component';
import { CovidTablaComponent } from '../covid-tabla/covid-tabla.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MostrarCorreoComponent, FormularioComponent, CovidTablaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

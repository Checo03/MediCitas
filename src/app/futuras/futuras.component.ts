import { Component } from '@angular/core';
import { PacientesService } from '../shared/pacientes.service';

@Component({
  selector: 'app-futuras',
  standalone: true,
  imports: [],
  templateUrl: './futuras.component.html',
  styleUrl: './futuras.component.css'
})
export class FuturasComponent {
  citasFuturas: any[] = [];

  constructor(private pacientesService: PacientesService) {
    this.obtenerCitasFuturas();
  }

  obtenerCitasFuturas(): void {
    const citas = this.pacientesService.obtenerCitas();

    //igual que en las cityas pasadas se obtiene la fecha actual
    const fechaActual = new Date().toISOString().split('T')[0];

    //se seleccionan las fechas posteriores o iguales a la fecha actual
    this.citasFuturas = citas.filter(cita => cita.fechaCita >= fechaActual);
  }

}

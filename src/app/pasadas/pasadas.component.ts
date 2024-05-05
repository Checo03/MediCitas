import { Component } from '@angular/core';
import { PacientesService } from '../shared/pacientes.service';

@Component({
  selector: 'app-pasadas',
  standalone: true,
  imports: [],
  templateUrl: './pasadas.component.html',
  styleUrl: './pasadas.component.css'
})
export class PasadasComponent {
  citasPasadas: any[] = [];

  constructor(private pacientesService: PacientesService) {
    this.obtenerCitasPasadas();
  }

  obtenerCitasPasadas(): void {
    const citas = this.pacientesService.obtenerCitas();
    const fechaActual = new Date().toISOString().split('T')[0]; //obtener la fecha actual
    this.citasPasadas = citas.filter(cita => cita.fechaCita < fechaActual); //seleccionar las citas de las fechas q ya pasaron
  }

}

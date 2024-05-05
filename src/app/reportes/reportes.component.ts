import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../shared/pacientes.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  citas: any[] = [];

  constructor(private pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.citas = this.pacienteService.obtenerCitas();
  }

}

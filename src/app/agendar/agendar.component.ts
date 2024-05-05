import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../shared/doctor.service';
import { PacientesService } from '../shared/pacientes.service';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})
export class AgendarComponent {
  @Input() doctor!: Doctor;
  paciente!: any;
  nombrePaciente: string = '';
  telefonoPaciente: string = '';
  fechaCita: string = '';
  horaCita: string = '';

  constructor(public doctorService: DoctorService, public activatedRoute: ActivatedRoute, private pacientesService: PacientesService) {
    this.activatedRoute.params.subscribe(params => {
      this.doctor = doctorService.getUnDoctor(params['id']);
    })
  }

  guardarCita(): void {
    // Obtener la fecha de hoy
    const fechaActual = new Date();
    //convertir la fecha seleccionada a objeto Date para manejar la comparacionm
    const fechaCitaSeleccionada = new Date(this.fechaCita);
    // Comparar si la fecha seleccionada noi es pasada
    if (fechaCitaSeleccionada >= fechaActual) {
      console.log("La fecha seleccionada es valida.");
      //aqui poner lo de los feedback o mensajes de retroalinentacion

      
      const nuevaCita = {
        nombrePaciente: this.nombrePaciente,
        telefonoPaciente: this.telefonoPaciente,
        fechaCita: this.fechaCita,
        horaCita: this.horaCita,
        doctor: this.doctor
      };

      const citas = this.pacientesService.obtenerCitas();
      if (this.pacientesService.citaExistente(nuevaCita, citas)) { //comprobar que la cita no exista, tanto en fecha como en hora
        console.log("Ya existe una cita para esta fecha y hora.");
        //aqui poner lo de los feedback o mensajes de retroalinentacion
        return;
      }

      // Si la cita no existe y la fecha es valida, se registra
      console.log("Cita guardada exitosamente.");
      this.pacientesService.agregarCita(nuevaCita);
    } else {
      console.log("No se puede agendar una cita en fechas pasadas.");
      //aqui poner lo de los feedback o mensajes de retroalinentacion
      
    }
  }
}

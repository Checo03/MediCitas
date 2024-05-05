import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  agregarCita(cita: any): void {
    let citas: any[] = this.obtenerCitas() || [];
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));
  }

  obtenerCitas(): any[] {
    const citas = localStorage.getItem('citas');
    return citas ? JSON.parse(citas) : [];
  }
  citaExistente(citaNueva: any, citas: any[]): boolean {
    return citas.some(cita => cita.fechaCita === citaNueva.fechaCita && cita.horaCita === citaNueva.horaCita);
  }

  limpiarCitas(): void {
    localStorage.removeItem('citas');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  agregarCita(cita: any): void {
    let citas: any[] = this.obtenerCitas() || [];
    citas.push(cita);
    const citasToSave = citas.map(cita => {
      if (cita.fechaCita instanceof Date) {
        return {
          ...cita,
          fechaCita: cita.fechaCita.toLocaleDateString() 
        };
      } else {
        return cita;
      }
    });
    localStorage.setItem('citas', JSON.stringify(citasToSave));
    
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

import { Injectable } from '@angular/core';
import { DOCTORES } from '../doctores';
import { Doctor } from '../doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctores:Doctor[]=DOCTORES;

  
  constructor() { }

  getDoctores():Doctor[] {
    return this.doctores;
  }
  getUnDoctor(posicion:number):Doctor {
    return this.doctores[posicion];
  }

}

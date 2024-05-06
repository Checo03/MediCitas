import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definir una interfaz para tipar los datos de la API
interface CovidData {
  date: number;
  states: number;
  positive: number;
  negative: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  // Agregar otras propiedades según la estructura de los datos
}

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  private apiCovid = 'https://api.covidtracking.com/v1/us/current.json';

  constructor(private http: HttpClient) { }

  ObtenerCovidData(): Observable<CovidData[]> {
    return this.http.get<CovidData[]>(this.apiCovid);
  }

}

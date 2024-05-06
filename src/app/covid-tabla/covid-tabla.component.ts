import { Component } from '@angular/core';
import { CovidApiService } from '../covid-api.service';

@Component({
  selector: 'app-covid-tabla',
  standalone: true,
  imports: [],
  templateUrl: './covid-tabla.component.html',
  styleUrl: './covid-tabla.component.css'
})
export class CovidTablaComponent {
  DatosCovid: any;

  constructor(private covidApiService: CovidApiService) { }

  ngOnInit(): void {
    this.ObtenerCovidData();
  }

  ObtenerCovidData(): void {
    this.covidApiService.ObtenerCovidData().subscribe(data => {
      this.DatosCovid.data;
    });
  }
}

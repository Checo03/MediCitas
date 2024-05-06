import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CovidApiService } from '../covid-api.service';

@Component({
  selector: 'app-covid-tabla',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './covid-tabla.component.html',
  styleUrl: './covid-tabla.component.css'
})
export class CovidTablaComponent {

  array: any =[];
  constructor(public covidApiService: CovidApiService){}

  recuperarDatos(): void{
    this.covidApiService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any):void{
    console.log(data);
    this.array = data.datos;
    console.log(this.array);
  }
}

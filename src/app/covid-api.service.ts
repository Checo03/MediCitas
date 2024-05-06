import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get("https://enfermedades.free.beeceptor.com/").pipe(take(1));
  }
}

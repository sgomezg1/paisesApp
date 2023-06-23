import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  generarEndpoint(enpoint: string) {
    return `${this.apiUrl}${enpoint}`;
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/name/${termino}`);
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/capital/${termino}`);
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/region/${termino}`);
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/alpha/${codigo}`);
    return this.http.get<Country[]>(url);
  }
}

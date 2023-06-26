import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  generarEndpoint(enpoint: string) {
    return `${this.apiUrl}${enpoint}`;
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/name/${termino}`);
    return this.getCountriesRequest(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/capital/${termino}`);
    return this.getCountriesRequest(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = this.generarEndpoint(`/region/${termino}`);
    return this.getCountriesRequest(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Country | null> {
    const url = this.generarEndpoint(`/alpha/${codigo}`);
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}

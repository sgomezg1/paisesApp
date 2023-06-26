import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  terminoInicial: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  isLoading: boolean = false;

  constructor(private paisServ: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.isLoading = true;
    this.paisServ.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
        this.isLoading = false;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: Crear sugerencias
  }

  ngOnInit(): void {
    this.paises = this.paisServ.cacheStore.byCountries.countries;
    this.terminoInicial = this.paisServ.cacheStore.byCountries.term;
  }
}

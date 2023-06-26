import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  terminoInicial: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];
  isLoading: boolean = false;

  constructor(private paisServ: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.isLoading = true;
    this.paisServ.buscarCapital(this.termino).subscribe(
      (capitales) => {
        this.capitales = capitales;
        this.isLoading = false;
      },
      (err) => {
        this.hayError = true;
        this.capitales = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    console.log(termino);
    // TODO: Crear sugerencias
  }

  ngOnInit(): void {
    this.capitales = this.paisServ.cacheStore.byCapital.countries;
    this.terminoInicial = this.paisServ.cacheStore.byCapital.term;
  }
}

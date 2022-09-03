import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  regiones: Country[] = [];

  constructor(private paisServ: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisServ.buscarRegion(this.termino).subscribe(
      (regiones) => (this.regiones = regiones),
      (err) => {
        this.hayError = true;
        this.regiones = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false
    // TODO: Crear sugerencias
  }

  ngOnInit(): void {
  }

}

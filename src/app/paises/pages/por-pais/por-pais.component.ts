import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  constructor(
    private paisServ: PaisService
  ) { }

  buscar() {
    this.hayError = false
    this.paisServ.buscarPais(this.termino).subscribe(
      paises => this.paises = paises,
      err => {
        this.hayError = true
        this.paises = []
      } )
  } 

  ngOnInit(): void {
  }

}

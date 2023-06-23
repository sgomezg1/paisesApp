import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paisesRegion: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(this.regionActiva).subscribe(
      (paisesPorRegion) => (this.paisesRegion = paisesPorRegion),
      (err) => {
        this.hayError = true;
        this.paisesRegion = [];
      }
    );
  }
}

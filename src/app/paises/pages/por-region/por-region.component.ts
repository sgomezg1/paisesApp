import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Region } from '../../interfaces/region.type';

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
export class PorRegionComponent implements OnInit {
  regiones: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva?: Region;
  hayError: boolean = false;
  paisesRegion: Country[] = [];
  isLoading: boolean = false;

  constructor(private paisService: PaisService) {}

  activarRegion(region: Region) {
    this.regionActiva = region;
    this.isLoading = true;
    this.paisService.buscarRegion(this.regionActiva).subscribe(
      (paisesPorRegion) => {
        this.paisesRegion = paisesPorRegion;
        this.isLoading = false;
      },
      (err) => {
        this.hayError = true;
        this.paisesRegion = [];
      }
    );
  }

  ngOnInit(): void {
    this.paisesRegion = this.paisService.cacheStore.byRegion.countries;
    this.regionActiva = this.paisService.cacheStore.byRegion.region;
  }
}

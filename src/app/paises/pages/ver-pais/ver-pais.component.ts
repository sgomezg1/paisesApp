import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private actRoute: ActivatedRoute,
    private paisServ: PaisService
  ) {}

  ngOnInit(): void {
    this.actRoute.params.pipe(
      switchMap(({ id }) => this.paisServ.getPaisPorCodigo(id)),
      tap( console.log )
    ).subscribe( pais => this.pais = pais[0] );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private paisServ: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params
      .pipe(switchMap(({ id }) => this.paisServ.getPaisPorCodigo(id)))
      .subscribe((pais) => {
        if (!pais) {
          return this.router.navigateByUrl('');
        }
        this.pais = pais[0];
        return;
      });
  }
}

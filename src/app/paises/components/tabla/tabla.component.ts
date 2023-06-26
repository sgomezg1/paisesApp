import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class TablaComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
}

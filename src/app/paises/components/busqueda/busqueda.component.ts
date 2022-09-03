import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit{
  @Output() onEnterPais: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  @Input() inputPlaceHolder: string = new Input();

  onDebounce$: Subject<string> = new Subject()
  termino: string = ''

  ngOnInit() {
    this.onDebounce$.pipe(
      debounceTime(500)
    ).subscribe(val => this.onDebounce.emit(val) )
  }

  buscar() {
    this.onEnterPais.emit(this.termino)
  }

  teclaPresionada(e: any) {
    this.onDebounce$.next(this.termino)
  }

}

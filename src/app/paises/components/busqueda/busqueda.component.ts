import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Output() onEnterPais: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() inputPlaceHolder: string = new Input();

  onDebounce$: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.onDebounce.next(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
    console.log('destruido');
  }

  buscar() {
    this.onEnterPais.emit(this.termino);
  }

  teclaPresionada(termino: string) {
    this.debouncer.next(termino);
  }
}

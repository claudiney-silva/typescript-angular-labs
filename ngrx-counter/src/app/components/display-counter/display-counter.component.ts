import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent {

  @Output() reset: EventEmitter<any> = new EventEmitter();

  counter$ = this.store
    .select('app')
    .pipe(map(e => e.counter));

  constructor(private store: Store<{ app: IAppState}>) {}
  
  resetCounter() {
    this.reset.emit();
  }
}

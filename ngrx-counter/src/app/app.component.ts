import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { decrementCounter, IAppState, incrementCounter } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalCounter$ = this.store
    .select('app')
    .pipe(map(e => e.counter));

  constructor(private store: Store<{app: IAppState}>) {}

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }
}

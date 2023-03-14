import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'details',
    loadChildren: () =>
      import('details/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'nav',
    loadChildren: () => import('nav/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

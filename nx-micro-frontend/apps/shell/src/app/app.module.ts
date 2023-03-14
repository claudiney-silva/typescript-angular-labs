import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
          path: '',
          outlet: 'menu',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              remoteName: 'menu',
              exposedModule: './Module',
            }).then((m) => m.AppModule),
      }
    ],
    { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

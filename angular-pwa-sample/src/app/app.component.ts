import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular PWA';

  constructor(private swUpdate: SwUpdate) {

  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(()=> {
        if (confirm("New Version Available. Reload?")) {
          window.location.reload();
        }
      })
    }
  }

}

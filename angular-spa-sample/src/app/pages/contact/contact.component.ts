import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  realname: string = '';
  email: string = '';

  send() {
    console.log({realname: this.realname, email: this.email});
    this.realname = '';
    this.email = '';
  }
}

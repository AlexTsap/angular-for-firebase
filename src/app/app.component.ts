import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = `Let's get started`;

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  constructor(
    @Inject('mail') public mail,
    @Inject('api') public api
  ) {}
}

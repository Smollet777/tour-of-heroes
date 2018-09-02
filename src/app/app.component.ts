import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    <app-messages></app-messages>
  `,
  styles: []
})
export class AppComponent {
  title = 'Tour of Heroes';
}

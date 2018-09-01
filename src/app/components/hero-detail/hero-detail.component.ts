import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-detail',
  template: `
  <div *ngIf="hero">
  <h2>{{hero.name | uppercase}} Details</h2>
    <div>
      <span>id: </span>{{hero.id}}
    </div>
    <div>
      <label>name:<input [(ngModel)]="hero.name" placeholder="name"/></label>
    </div>
  </div>
  `,
  styles: []
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
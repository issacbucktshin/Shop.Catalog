import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('opacity', [
    state('false', style({
        'opacity': '1'
    })),
    state('true', style({
        'opacity': '0.5'
    })),
    transition('true <=> false', animate(200))
  ])]
})
export class AppComponent {
  title = 'app';
  navIsOpen = false;

  navStateChanged(e: boolean) {
    this.navIsOpen = e;
  }
}

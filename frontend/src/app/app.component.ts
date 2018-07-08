import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wt;
  private sizeMenu:number=1100;

  @HostListener('window:resize', ['$event'])
  sizeWindow(event) {
    this.wt = event.target.innerWidth;
    this.sizeMenu = this.wt;
  }
}

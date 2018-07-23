import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: [
    './appbar.component.scss'
  ]
})
export class AppbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wt;
  public sizeMenu:number=1100;

  @HostListener('window:resize', ['$event'])
  sizeWindow(event) {
    this.wt = event.target.innerWidth;
    this.sizeMenu = this.wt;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  categories: string[] =['שוקולד','קפה','קמח','מיצים','אלכוהול']
  
  constructor() { }

  ngOnInit() {
  }

}

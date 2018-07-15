import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() 
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/models';
import { ProductService } from '../../shared/services/services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title: string = "מבצעים חמים";

  products: Product[] = [];
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
     this.products = this.productService.getProducts();
  }
}

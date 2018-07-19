import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Category } from '../../shared/models/category';
import { ProductService } from '../../shared/services/services'


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  categories: Category[] =[
    {id:1,name:'שוקולד'},
    {id:2,name:'קפה'}
  ]
  
  products: Product[] = [];
  
  searchText: String;
  selectedCategories : Category [] = [];
  maxprice: number;
  priceFilter:number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.products = this.productService.getProducts();
   this.maxprice = Math.max.apply(Math,this.products.map(x=>x.price));
  }

  categoreisSelected(_selectedCategories) {
    this.selectedCategories = _selectedCategories;
  }

  sliderValChanged(value) {
    this.priceFilter = value;
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Category } from '../../shared/models/category';

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
  
  products: Product[] = [
    {id:1, name:'שוקו',description: 'שוקו בשקית 1 ליטר', price: 5.070, img:"https://picsum.photos/100/100/?random",category:{id:1,name:'שוקולד'}},
    {id:2, name:'אבקת קקאו',description: ' שק אבקת קקאו', price: 1.070, img:"https://picsum.photos/100/100/?random",category:{id:2,name:'קפה'}},
    {id:3, name:'קפה שחור',description: 'מיכל קפה שחור', price: 90.070, img:"https://picsum.photos/100/100/?random",category:{id:1,name:'שוקולד'}},
    {id:4, name:'קפה הפוך',description: 'שוקו בשקית 1 ליטר', price: 15.070, img:"https://picsum.photos/100/100/?random",category:{id:2,name:'שוקולד'}},
    {id:5, name:' 1 אחוז שוקו',description: 'שקית 1 ליטר', price: 15.070, img:"https://picsum.photos/100/100/?random",category:{id:2,name:'קפה'}}
  ];
  
  searchText: String;
  selectedCategories : Category [] = [];
  maxprice: number;
  priceFilter:number;

  constructor() { }

  ngOnInit() {
   this.maxprice = Math.max.apply(Math,this.products.map(x=>x.price));
  }

  categoreisSelected(_selectedCategories) {
    this.selectedCategories = _selectedCategories;
  }

  sliderValChanged(value) {
    this.priceFilter = value;
  }
}

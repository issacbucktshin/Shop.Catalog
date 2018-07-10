import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() 
  products: Product[] = [
    {id:1, name:'שוקו',description: 'שוקו בשקית 1 ליטר', price: 5.070, img:"https://picsum.photos/100/100/?random"},
    {id:2, name:'אבקת קקאו',description: ' שק אבקת קקאו', price: 1.070, img:"https://picsum.photos/100/100/?random"},
    {id:3, name:'קפה שחור',description: 'מיכל קפה שחור', price: 90.070, img:"https://picsum.photos/100/100/?random"},
    {id:4, name:'קפה הפוך',description: 'שוקו בשקית 1 ליטר', price: 15.070, img:"https://picsum.photos/100/100/?random"},
    {id:5, name:' 1 אחוז שוקו',description: 'שקית 1 ליטר', price: 15.070, img:"https://picsum.photos/100/100/?random"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Product} from '../../models/models'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http:HttpClient) { }

  getProducts() {
    let  products: Product[] = [
      {id:1, name:'שוקו',description: 'שוקו בשקית 1 ליטר', price: 5.070, img:"https://picsum.photos/150/150/?random",category:{id:1,name:'שוקולד'}},
      {id:2, name:'אבקת קקאו',description: ' שק אבקת קקאו', price: 1.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'קפה'}},
      {id:3, name:'קפה שחור',description: 'מיכל קפה שחור', price: 90.070, img:"https://picsum.photos/150/150/?random",category:{id:1,name:'שוקולד'}},
      {id:4, name:'קפה הפוך',description: 'שוקו בשקית 1 ליטר', price: 15.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'שוקולד'}},
      {id:5, name:' 1 אחוז שוקו',description: 'שקית 1 ליטר', price: 15.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'קפה'}}
    ];
    //return this.http.get('/api/food');
    return products;
  }

  getHotProducts() {
    let  products: Product[] = [
      {id:1, name:'שוקו',description: 'שוקו בשקית 1 ליטר', price: 5.070, img:"https://picsum.photos/150/150/?random",category:{id:1,name:'שוקולד'}},
      {id:2, name:'אבקת קקאו',description: ' שק אבקת קקאו', price: 1.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'קפה'}},
      {id:3, name:'קפה שחור',description: 'מיכל קפה שחור', price: 90.070, img:"https://picsum.photos/150/150/?random",category:{id:1,name:'שוקולד'}},
      {id:4, name:'קפה הפוך',description: 'שוקו בשקית 1 ליטר', price: 15.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'שוקולד'}},
      {id:5, name:' 1 אחוז שוקו',description: 'שקית 1 ליטר', price: 15.070, img:"https://picsum.photos/150/150/?random",category:{id:2,name:'קפה'}}
    ];
    //return this.http.get('/api/food');
    return products;
  }
}
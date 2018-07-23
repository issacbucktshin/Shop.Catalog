import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product} from '../../models/models'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsCollection: AngularFirestoreCollection<any>;
  products: Observable<Product[]>  
  api:string = 'products';
  
  constructor(public afs:AngularFirestore) {
    
    this.productsCollection = this.afs.collection<Product>(this.api);  
    this.products = this.productsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = +a.payload.doc.id;
        return data;
      });
    });
  }

  private getAllProducts(){
    return this.products;
  }

  getProducts(hot?:boolean) : Observable<Product[]> {
    
    if(hot == null) return  this.getAllProducts();
    return this.products
      .map(products => 
        products.filter(product => product.isHot == hot)
  )}
}
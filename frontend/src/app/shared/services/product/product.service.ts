import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ProductModel, CategoryModel } from '../../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productsCollection: AngularFirestoreCollection<any>;
  catCdoc: AngularFirestoreDocument<any>;
  products: Observable<ProductModel[]>  
  api:string = 'products';
  
  constructor(public afs:AngularFirestore) {
    
    this.productsCollection = this.afs.collection<ProductModel>(this.api);  
   
    this.products = this.productsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ProductModel;
        data.id =+ a.payload.doc.id;
        let d = a.payload.doc.data();
        data.category = new CategoryModel;
        data.category.id = +d.category.id;
        return data;
      });
    });
  }

  private getAllProducts(){
    return this.products;
  }

  getProducts(hot?:boolean) : Observable<ProductModel[]> {
    
    if(hot == null) return  this.getAllProducts();
    return this.products
      .map(products => 
        products.filter(product => product.isHot == hot)
  )}
}
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../../models/models'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  
  categoryCollection: AngularFirestoreCollection<any>;
  categories: Observable<Category[]>  
  api:string = 'categories';

  
  constructor(public afs:AngularFirestore) {
    
    this.categoryCollection = this.afs.collection<Category>(this.api);  
    this.categories = this.categoryCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Category;
        data.id = +a.payload.doc.id;
        return data;
      });
    });
  }
  
  private getCategoryList(){
    return this.categories;
  }  

  getCategories(id?:number) : Observable<Category[]> {
    
    if(id == null) return  this.getCategoryList();
    return this.categories
      .map(category => 
        category.filter(x => x.id === id)
  )}
}
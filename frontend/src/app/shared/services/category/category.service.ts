import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { CategoryModel } from '../../../models/models';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  
  categoryCollection: AngularFirestoreCollection<any>;
  categories: Observable<CategoryModel[]>  
  api:string = 'categories';

  
  constructor(public afs:AngularFirestore) {
    
    this.categoryCollection = this.afs.collection<CategoryModel>(this.api);  
    this.categories = this.categoryCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CategoryModel;
        data.id = +a.payload.doc.id;
        return data;
      });
    });
  }
  
  private getCategoryList(){
    return this.categories;
  }  

  getCategories(id?:number) : Observable<CategoryModel[]> {
    
    if(id == null) return  this.getCategoryList();
    return this.categories
      .map(category => 
        category.filter(x => x.id === id)
  )}
}
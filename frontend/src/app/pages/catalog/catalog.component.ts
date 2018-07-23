import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Category } from '../../shared/models/category';
import { ProductService } from '../../shared/services/services'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit,OnDestroy {

  categories: Category[] =[
    {id:1,name:'שוקולד'},
    {id:2,name:'קפה'}
  ]
  
  products: Product[] = [];
  searchText: String;
  selectedCategories : Category [] = [];
  maxprice: number;
  priceFilter:number;
  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.productService.getProducts()
     .takeUntil(this.ngUnsubscribe)
     .subscribe((products:Product[]) => {
       this.products = products;
     })
   this.maxprice = Math.max.apply(Math,this.products.map(x=>x.price));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  categoreisSelected(_selectedCategories) {
    this.selectedCategories = _selectedCategories;
  }

  sliderValChanged(value) {
    this.priceFilter = value;
  }
}

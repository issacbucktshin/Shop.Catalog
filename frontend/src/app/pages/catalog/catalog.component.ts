import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Product, Category } from '../../shared/models/models';
import { ProductService } from '../../shared/services/services'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [trigger('expandCollapse', [
      state('open', style({
          'display': 'block',
          
      })),
      state('close', style({
          'display': 'none'
      })),
      transition('open <=> close', animate(100))
  ])]
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
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  openCloseAnim:string = 'open' ;

  constructor (
    private productService: ProductService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 450px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }

  ngOnInit() {
   this.productService.getProducts()
     .takeUntil(this.ngUnsubscribe)
     .subscribe((products:Product[]) => {
       this.products = products;
       this.maxprice = Math.max.apply(Math,this.products.map(x=>x.price));
      }) 
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  categoreisSelected(_selectedCategories) {
    this.selectedCategories = _selectedCategories;
  }

  sliderValChanged(value) {
    this.priceFilter = value;
  }

  toogleReportsFilter(): void {
    this.openCloseAnim = (this.openCloseAnim == 'open') ? 'close' : 'open';
  } 
}

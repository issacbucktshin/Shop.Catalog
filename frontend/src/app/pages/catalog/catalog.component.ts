import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit, Component, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Product, Category } from '../../shared/models/models';
import { ProductService, CategoryService } from '../../shared/services/services';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [trigger('expandCollapse', [
      state('open', style({
          'height': '450px',
          'overflow' : 'visible'
      })),
      state('close', style({
          'height': '0',
          'overflow': 'hidden'
      })),
      transition('open <=> close', animate(300))
  ])]
})

export class CatalogComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  products: Product[] = [];
  selectedCategories: Category [] = [] ;

  searchText: String ;
  maxprice: number ;
  priceFilter: number ;
  
  private ngUnsubscribe: Subject<void> = new Subject() ;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  openCloseAnim: string;

  constructor (
    private categoryService: CategoryService,
    private productService: ProductService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 450px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
   this.openCloseAnim = (this.mobileQuery.matches) ? 'close' : 'open';
   this.retrieveProducts();
   this.retrieveCategories();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.toogleReportsFilter();
  }

  retrieveProducts() {
    this.productService.getProducts()
    .takeUntil(this.ngUnsubscribe)
    .subscribe((products: Product[]) => {
      this.products = products;
      this.maxprice = Math.max.apply(Math, this.products.map(x => x.price));
     });
  }

  retrieveCategories() {
    this.categoryService.getCategories()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((_categories: Category[]) => {
        this.categories = _categories
      });
  }

  categoreisSelected(_selectedCategories) {
    this.selectedCategories = _selectedCategories;
  }

  sliderValChanged(value) {
    this.priceFilter = value;
  }

  toogleReportsFilter(): void {
    this.openCloseAnim = (this.openCloseAnim === 'open') ? 'close' : 'open';
  }
}

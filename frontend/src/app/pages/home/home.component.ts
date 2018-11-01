import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../shared/services/services'
import { Subject } from 'rxjs/Subject';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProductModel } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  title: string = "מוצרים חדשים";
  newProducts: ProductModel[] = [];
  private ngUnsubscribe: Subject<void> = new Subject();
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private productService: ProductService) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 450px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
     this.productService.getProducts(true)
     .takeUntil(this.ngUnsubscribe)
     .subscribe((products:ProductModel[]) => {
       this.newProducts = products;
     })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

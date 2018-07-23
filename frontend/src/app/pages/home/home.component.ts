import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/models';
import { ProductService } from '../../shared/services/services'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  title: string = "מבצעים חמים";
  hotProducts: Product[] = [];
  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private productService: ProductService) {}

  ngOnInit() {
     this.productService.getProducts(true)
     .takeUntil(this.ngUnsubscribe)
     .subscribe((products:Product[]) => {
       debugger
       this.hotProducts = products;
     })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

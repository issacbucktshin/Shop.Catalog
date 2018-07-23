import { Component, OnInit } from '@angular/core';
import { NguCarouselStore, NguCarousel } from '@ngu/carousel';
import { Product} from '../../../models/models'
import { ProductService } from '../../../services/services'
import { Input } from '@angular/core';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {

  @Input()
  products: Product[]=[];

  public carousel: NguCarousel;

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    //debugger
    //this.products = this.productService.getProducts();
    this.carousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 5, all: 0},
      slide: 1,
      speed: 100,
      interval: 2000,
      point: {
        visible: true
      },
      RTL: true,
      load: 1,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  carousleLoad(event){
    //this.products = this.productService.getProducts();
  }

}

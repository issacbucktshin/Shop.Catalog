import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() product;
  
  constructor() {}

  ngOnInit() {}

  getProductImageUrl()
  {
    return "url('" + this.product.img + "')";
  }
}

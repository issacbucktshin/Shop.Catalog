import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './product-modal/product-modal.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  //product:Product = {id:1, name:'שוקו',description: 'שוקו בשקית 1 ליטר', price: 5.070, img:"https://picsum.photos/100/100/?random"};
  product:Product;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openProductModal(){
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.product = this.product;
  }
}

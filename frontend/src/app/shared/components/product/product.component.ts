import { Component, OnInit, Input } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './product-modal/product-modal.component'
import { ProductModel } from '../../../models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:ProductModel;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openProductModal(){
    const modalRef = this.modalService.open(ProductModalComponent,
      { size: 'lg',windowClass:'.custom-show'});
    modalRef.componentInstance.product = this.product;
  }
}
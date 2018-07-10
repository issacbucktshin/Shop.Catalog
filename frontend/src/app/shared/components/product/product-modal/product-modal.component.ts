import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../models/product'

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @Input() name;

  @Input() product;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  title:string;

  @Input()
  filterItems: any[] = [];

  selectedItems:any[];

  @Output()
  selectedItemsChanged = new EventEmitter<any[]>();

  constructor() { }

  selectionChange(selection){    
    this.selectedItemsChanged.emit(selection);
  }
}

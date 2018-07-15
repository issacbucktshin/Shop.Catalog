import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  title:string;

  @Input()
  filterItems: any[] = [];

  selectedItems:any[];

  @Output()
  selectedItemsChanged = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  selectionChange(selection){
    debugger
    this.selectedItemsChanged.emit(selection);
  }
}

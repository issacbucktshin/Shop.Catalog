import { Pipe, PipeTransform } from '@angular/core';
import { isNumber, isString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], property?: string, searchTxt?: string): any[] {
    if (!items) {
      return [];
    }
    if ( !searchTxt ) {
      return items;
    }

    searchTxt = searchTxt.toLowerCase();

    return items.filter(item => {
      return item[property].toLowerCase().includes(searchTxt);
    });
  }
}

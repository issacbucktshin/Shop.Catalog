import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(items: any[], property?:string ,price?: number): any[] {
    
    if(!items) return [];
    if(!price) return items;

    return items.filter(item=>{
      return item[property] <= price;
    });
  }
}

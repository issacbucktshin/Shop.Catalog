import { Pipe, PipeTransform } from '@angular/core';
import { Category, Product} from '../../models/models'

@Pipe({
  name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
  
  transform(products: Product[], categories?:Category[]): any {
    
    let mapCat = categories.map(Category => Category.id);

    if(!categories.length) return products;
 
    return products.filter(product => 
      !mapCat.includes(product.category.id)
    )
  }
}

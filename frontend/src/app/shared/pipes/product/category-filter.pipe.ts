import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel, CategoryModel } from '../../../models/models';

@Pipe({
  name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
  
  transform(products: ProductModel[], categories?:CategoryModel[]): any {
    
    let mapCategories = categories.map(Category => Category.id);
    if(!categories.length) return products;

    return products.filter(product => {
      return mapCategories.includes(product.category.id);
    });
  }
}

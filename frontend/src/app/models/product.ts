import { CategoryModel } from './category';

export class ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    category: CategoryModel;
    isHot: boolean;
}

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList:IProduct[],term:string): any[] {
    return productList.filter((item)=>item.category.toLowerCase().includes(term.toLowerCase()));
  }

}

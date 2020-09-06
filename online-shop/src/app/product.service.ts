import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts():Observable<Product[]>{
    return of(PRODUCTS);
  }
  getNewProducts():Observable<Product[]>{
    return of(PRODUCTS.slice(0, 7));
  }
  getCatProducts(catId: number):Observable<Product[]>{
    return of(PRODUCTS.filter(product => product.categoryId === catId));
  }
}

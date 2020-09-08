import { Category } from './category';
import { Injectable } from '@angular/core';
import { CATEGORIES } from './mock-categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories():Observable<Category[]>{
    return of(CATEGORIES);
  }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(cateory => cateory.id === id));
  }
}

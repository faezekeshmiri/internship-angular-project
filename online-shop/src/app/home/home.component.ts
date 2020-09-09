import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title1 = 'دسته بندی ها';
  title2 = 'تازه ها';
  carId1 = 'car1';
  carId2 = 'car2';
  type1 = 'category';
  type2 = 'product';
  constructor(private categoryService: CategoryService , private productService: ProductService) { }

  ngOnInit() {
    this.getCategories();
    this.getNewProducts();
  }
  getCategories(): Observable<Category[]>{
    return this.categoryService.getCategories();
  }
  getNewProducts(): Observable<Product[]>{
    return this.productService.getNewProducts();
  }
}

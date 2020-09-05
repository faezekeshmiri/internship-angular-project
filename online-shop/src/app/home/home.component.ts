import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title1 = 'دسته بندی ها';
  categorie: Category[];
  title2 = 'جدیدترین ها';
  newProducts: Product[];
  carId1 = 'car1';
  carId2 = 'car2';
  constructor(private categoryService: CategoryService , private productService: ProductService) { }

  ngOnInit() {
    this.getCategories();
    this.getNewProducts();
  }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categorie = categories);
  }
  getNewProducts(): void{
    this.productService.getNewProducts().subscribe(newProducts =>this.newProducts = newProducts);
  }
}

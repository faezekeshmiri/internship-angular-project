import { ProductService } from './../product.service';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categorie: Category[];
  constructor(private categoryService: CategoryService, private productService: ProductService ) { }

  ngOnInit() {
    this.setCategories();
  }
  setCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categorie = categories);
  }
  setCatProducts(categoryId: number): Observable<Product[]>{
    return this.productService.getCatProducts(categoryId);
  }
}

import { ProductService } from './../product.service';
import { Product } from './../product';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../category';



@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  category: Category;
  products: Product[];

  constructor( private route: ActivatedRoute,
               private categoryService: CategoryService,
               private producatService: ProductService) { }

  ngOnInit() {
    this.getCategory();
    this.getProducts();
  }
  getCategory(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }
  getProducts(): void{
    this.producatService.getCatProducts(this.category.id).subscribe(products => this.products = products);
  }

}

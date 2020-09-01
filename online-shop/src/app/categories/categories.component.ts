import { CategoryService } from './../category.service';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  title = "دسته بندی ها";
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
}

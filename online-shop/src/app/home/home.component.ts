import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title1 = 'دسته بندی ها';
  items1: Category[];
  title2 = 'جدیدترین ها';
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.items1 = categories);
  }
}

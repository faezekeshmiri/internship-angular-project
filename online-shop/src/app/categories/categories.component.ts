import { CategoryService } from './../category.service';
import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft , faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  leftArr = faArrowCircleLeft;
  rightArr = faArrowCircleRight;
  categories: Category[];
  title = 'دسته بندی ها';
  pages: number ;
  pageLen = 4;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
    this.pages = this.pagination(this.categories.length , this.pageLen) ;
  }
  getCategories(): void{
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
  counter(i: number) {
    return new Array(i);
  }
  pagination(items: number, pageLen: number): number{
    if (items % pageLen !== 0){
      return Math.floor(items / pageLen) + 1;
    }
    return items / pageLen;
  }
}

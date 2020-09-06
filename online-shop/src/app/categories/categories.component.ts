import { CategoryService } from './../category.service';
import { Category } from './../category';
import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft , faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  leftArr = faArrowCircleLeft;
  rightArr = faArrowCircleRight;
  @Input() carID: string;
  @Input() items;
  @Input() title: string; // decorate the property with @Input()
  pages: number ;
  pageLen = 4;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.pages = this.pagination(this.items.length , this.pageLen) ;
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

import { ProductService } from './../product.service';
import { Product } from './../product';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  user: User = {id: 1, firstName: 'فائزه', lastName: 'کشمیری' , password: '12345' , phoneNumber: '555-555-555' };
  products: Product[];
  sum: number;
  shippingCost = 8000;
  delete = faTimesCircle;

  constructor( private productService: ProductService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getCartProduct();
    this.sum = this.sumation(this.products);
  }
  getCartProduct(): void{
    this.productService.getProducts().subscribe(products => this.products = products.slice(3, 6));
  }
  sumation( products: Product[] ): number{
    let sum = 0;
    let i;
    for ( i = 0 ; i < products.length ; i++){
      sum += products[i].price;
    }
    return sum;
  }
  onDelete( product: Product): void{
    this.products = this.products.filter(item => item !== product);
  }

}

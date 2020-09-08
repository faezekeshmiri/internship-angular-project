import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private producatService: ProductService) { }

  ngOnInit(): void {
  this.getProduct();
}

getProduct(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.producatService.getProduct(id)
    .subscribe(product => this.product = product);
}

}

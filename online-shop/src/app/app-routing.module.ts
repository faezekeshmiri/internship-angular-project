import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'category/:id', component: CategoryProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

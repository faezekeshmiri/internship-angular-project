import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [														
    AppComponent,
      HeaderComponent,
      ProductsComponent,
      HomeComponent,
      LoginComponent,
      CategoriesComponent,
      FooterComponent,
      EventsComponent,
      RegisterComponent,
      AboutComponent,
      ContactComponent,
      CategoryProductsComponent,
      ProductDetailsComponent,
      ProductDetailComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

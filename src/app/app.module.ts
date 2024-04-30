import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductsComponent } from './Component/products/products.component';
import { CategoryComponent } from './Component/category/category.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgrtpasswordComponent } from './Component/forgrtpassword/forgrtpassword.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ProductdetailsComponent } from './Component/productdetails/productdetails.component';
import { MainsliderComponent } from './Component/mainslider/mainslider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddtitlePipe } from './addtitle.pipe';
import { SearchPipe } from './search.pipe';
import { CategorySliderComponent } from './Component/category-slider/category-slider.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishLIstComponent } from './Component/wish-list/wish-list.component';
import { ChecOutComponent } from './Component/chec-out/chec-out.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoryComponent,
    FooterComponent,
    NavbarComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ForgrtpasswordComponent,
    ResetPasswordComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    AddtitlePipe,
    SearchPipe,
    CategorySliderComponent,
    CartComponent,
    WishLIstComponent,
    ChecOutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { CategoryComponent } from './Component/category/category.component';
import { RegisterComponent } from './Component/register/register.component';
import { ProductsComponent } from './Component/products/products.component';
import { LoginComponent } from './Component/login/login.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ForgrtpasswordComponent } from './Component/forgrtpassword/forgrtpassword.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ProductdetailsComponent } from './Component/productdetails/productdetails.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishLIstComponent } from './Component/wish-list/wish-list.component';
import { ChecOutComponent } from './Component/chec-out/chec-out.component';

const routes: Routes = [
  {path:'', redirectTo:"register", pathMatch:'full'},
  {path:'home',canActivate:[authGuard], component:HomeComponent},
  {path:'brands',canActivate:[authGuard], component:BrandsComponent},
  {path:'category',canActivate:[authGuard], component:CategoryComponent},
  {path:'checkOut/:id',canActivate:[authGuard], component:ChecOutComponent},
  {path:'products', canActivate:[authGuard],component:ProductsComponent},
  {path:'productdetails/:id', canActivate:[authGuard],component:ProductdetailsComponent},
  {path:'cart', canActivate:[authGuard],component:CartComponent},
  {path:'wishList', canActivate:[authGuard],component:WishLIstComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgepassword', component:ForgrtpasswordComponent},
  {path:'resetPassword', component:ResetPasswordComponent},
  {path:'**', component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

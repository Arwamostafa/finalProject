
import { Productsdetails, productInf } from './../../interfaces/productdetails';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProuductService } from 'src/app/services/prouduct.service';
declare let $:any
declare let Swal:any
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  isloading:boolean=false;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    autoplay:true,
   autoplayTimeout:3000 ,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }




  productDetail:productInf | null= null

constructor(private _ActivatedRoute:ActivatedRoute, private _ProuductService:ProuductService,private _cartService:CartService ){
  
  _ActivatedRoute.params.subscribe((data)=>{
    
    let id = data['id']
    _ProuductService.getdetailsProuduct(id).subscribe({
      next:(data:Productsdetails)=>{
        this.productDetail = data.data
   console.log(data);
    $(".loading").fadeIn(0)
      },
      error:()=>{

      },
      complete:()=>{
       $(".loading").fadeOut(1000)
      }
    })
    
  })
} 
addCart(id:string){
  this.isloading=true
      this._cartService.addProductCart(id).subscribe({
        next:(response)=>{
          if(response.status=='success'){
            Swal.fire(
              
              response.message,
              'success'
            )
          }
         console.log(response);
         
        },error:()=>{
          this.isloading=false
        },
        complete:()=>{
         this.isloading=false
        }
      })
    }
    addWishList(id:string){
      this.isloading=true
      this._cartService.addProductWishListt(id).subscribe({
        next:(response)=>{
          if(response.status=='success'){
            Swal.fire(
              'Good job!',
              response.message,
              'success'
            )
          }
         console.log(response);
         
        }
      })
    }
}

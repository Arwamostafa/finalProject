import { CartData } from './../../interfaces/cart';
import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
declare let Swal:any
declare let $ :any
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData:CartData | null= null
constructor(private _cartService:CartService){}

updateQuantitiy(id:string, count:number){
  if (count > 0){
    this._cartService.UpdateCartQuantity(id,count).subscribe({

    next:(response:any)=>{
      console.log(response);
      this.cartData=response
    }
  })
  }else{
    Swal.fire(
      {
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      }
    )
  }
  
}
ClearCart(){
  this._cartService.ClearCart().subscribe({
    next:(response)=>{
      if(response.message =='success'){
        this.cartData= null
      }
     
         console.log(response);
    }
  })
}
deletProduct(id:string){
  this._cartService.DeletProduct(id).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.cartData=response
    }
  })
}

ngOnInit(): void {
  
    $(".loading").fadeIn(1000)
    
  this._cartService.getAllproduct().subscribe({
    next:(response :CartData)=>{
      this.cartData=response
    console.log(response);
    this._cartService.changeCartCount(response.numOfCartItems)
    },complete:()=>{
      $(".loading").fadeOut(1000)
      }
  })
}
}

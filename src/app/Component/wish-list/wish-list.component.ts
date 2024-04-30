import { Component, OnInit } from '@angular/core';
import { WishData } from 'src/app/interfaces/wish-list';
import { CartService } from 'src/app/services/cart.service';
declare let Swal:any
declare let $:any
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishLIstComponent  implements OnInit{
  wishList:WishData | null= null
  constructor(private _cartService:CartService){}
  isloading:boolean=false
  deletProductwishlist(id:string){
    this._cartService.DeletProductWishList(id).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.wishList=response
       
      }
      
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
  // addCart(id:string){
  //   this._cartService.addProductCart(id).subscribe({
  //     next:(response)=>{
  //       if(response.status=='success'){
         
  //         Swal.fire(
  //           'Good job!',
  //           response.message,
  //           'success'
  //         )
         
  //       }
  //      console.log(response);
       
  //     },complete:()=>{
        
  //     }
  //   })
  // }
  ngOnInit(): void {
    $(".loading").fadeIn(0)
    this._cartService.getAllWishList().subscribe({
      next:(response :WishData)=>{
        this.wishList=response
      console.log(response);
      
      },complete:()=>{
        $(".loading").fadeOut(1000)
      }
    })
    
  }

}

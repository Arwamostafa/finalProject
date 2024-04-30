import { Component,OnInit} from '@angular/core';
import { Products, product } from 'src/app/interfaces/products';
import { ProuductService } from 'src/app/services/prouduct.service';
import { CartService } from 'src/app/services/cart.service';
declare let $:any
declare let Swal:any
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  isloading:boolean=false;
   searchValue:string= ""
 productList:product[] =[]
  constructor(private _ProuductService:ProuductService, private _cartService:CartService){}

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
  getAllData(){
    $(".loading").fadeIn(0)
    this._ProuductService.getAllProuducts().subscribe({
      next:(requst)=>{
        console.log(requst.data)
        this.productList = requst.data
      },
      error:()=>{
   
      },
      complete:()=>{
        
          $(".loading").fadeOut(1000)
          
      },
     })
  }
  
  ngOnInit(): void {
    
    this.getAllData()
    $(".pagenum").click((e:any)=>{
    
      
       let page=$(e.target).text()
       console.log(page);
        this.getAllData()
      
    })
  }
}

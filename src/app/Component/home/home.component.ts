import { Component,OnInit} from '@angular/core';
import { Products, product } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProuductService } from 'src/app/services/prouduct.service';
// import { AuthService } from '../../services/auth.service';
declare let $:any
declare let Swal:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isloading:boolean=false;
  searchValue:string= ""
 productList:product[] =[]
constructor(private _ProuductService:ProuductService ,private _cartService:CartService){}

addCart(id:string){
  this.isloading=true 
  this._cartService.addProductCart(id).subscribe({
    next:(response)=>{
      if(response.status=='success'){
        this._cartService.changeCartCount(response.numOfCartItems)
        Swal.fire(
          'Good job!',
          response.message,
          'success'
        )
        $('.fa-heart')
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
    
    },complete:()=>{
      document.querySelector(".heart")?.classList.add("text-danger")
    }
  })
}
getAllData(page: string='1'){
  $(".loading").fadeIn(0)
  this._ProuductService.getAllProuduct(page).subscribe({
    next:(requst:Products)=>{
      console.log(requst.data)
      this.productList = requst.data
    },complete:()=>{
    $(".loading").fadeOut(1000)
    },
   })
}

ngOnInit(): void {
  // this._ProuductService.getAllProuduct('1').subscribe({
  //  next:(requst:Products)=>{
  //    console.log(requst.data)
  //    this.productList = requst.data
  //  },
  //  error:()=>{

  //  },
  //  complete:()=>{

  //  },
  // })
  this.getAllData()
  $(".pagenum").click((e:any)=>{
  
    
     let page=$(e.target).text()
     console.log(page);
      this.getAllData(page)
    //  this._ProuductService.getAllProuduct().subscribe({
    //   next:(requst:Products)=>{
    //     console.log(requst.data)
    //     this.productList = requst.data
    //   },
    //   error:()=>{
   
    //   },
    //   complete:()=>{
   
    //   },
    //  })
    
    
    
  })
}
//  user:any

//   constructor(_auth: AuthService) {
//     _auth.userData.subscribe({
//       next:(data)=>{
//         this.user= data
//       }
//     })
// }
}

import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/services/cart.service';
AuthService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  count:number=0
  isLogin:any=null
  constructor(private _auth: AuthService , private _cart:CartService) {
 
_cart.cartCount.subscribe((data)=>{
  this.count =data
})
  }
  logOut(){
    this._auth.logOut()
  }
  ngOnInit(): void {
   this. _auth.userData.subscribe({
    next:(data)=>{
      console.log(data);
      this.isLogin=this._auth.userData.getValue()
    }
   })
  }
}

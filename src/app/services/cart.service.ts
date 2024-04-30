import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _http:HttpClient) {
     
    this.getAllproduct().subscribe({
      next:(response)=>{
        this.changeCartCount(response.numOfCartItems)
      }
    })
  }
baseUrl:string ="https://ecommerce.routemisr.com"
headerData:any={
  token:localStorage.getItem("token")
}
cartCount:BehaviorSubject<number> =new BehaviorSubject(0)
  changeCartCount(data:number){
this.cartCount.next(data)
  }
  
  addProductCart(id:string):Observable<any>{
    let body = {
      productId:id
    }
   return this._http.post(`${this.baseUrl}/api/v1/cart`,body,{
    headers:this.headerData
   }) }
   
  addProductWishListt(id:string):Observable<any>{
    let body = {
      productId:id
    }
   return this._http.post(`${this.baseUrl}/api/v1/wishlist`,body,{
    headers:this.headerData
   }) }
  
  getAllproduct():Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.headerData
    })
  }
  getAllWishList():Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/wishlist`,{
      headers:this.headerData
    })
  }
  DeletProduct(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}/api/v1/cart/${id}`,{
      headers:this.headerData
    })
  }
  DeletProductWishList(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}/api/v1/wishlist/${id}`,{
      headers:this.headerData
    })
  }
  ClearCart():Observable<any>{
    return this._http.delete(`${this.baseUrl}/api/v1/cart/`,{
      headers:this.headerData
    })
  }
  UpdateCartQuantity(id:string, count:number){
    let body= {
      count:count
    }
    return this._http.put(`${this.baseUrl}/api/v1/cart/${id}`,body,
    {headers:this.headerData})
  }
  
  checkPayment(cartID:string,dataShipping:any):Observable<any>{
    let body ={
      dataAddress:dataShipping
    }
    return this._http.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,body,{
      headers:this.headerData
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProuductService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProuduct(page:string):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}`)
  }
  getAllProuducts():Observable<any>{
return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getdetailsProuduct(id:string):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getAllCategory():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
      }
  getAllBrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
      }
}

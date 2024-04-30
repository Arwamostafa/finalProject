
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private _HttpClient: HttpClient ,private _Router:Router) {
    if(localStorage.getItem("token")){
      let token:string|null =localStorage.getItem("token")
      if( token != null){
        let data =jwtDecode(token)
        this.saveUserData(data)
      }
      
    }
  }
  userData:BehaviorSubject<any>= new BehaviorSubject(null)

  saveUserData(data:any){
    this.userData.next(data)
  }
  logOut(){
    localStorage.removeItem("token")
   this.saveUserData(null)
     this._Router.navigate(['/login'])
  }
  register(userData:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", userData)
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", userData)
  }
  forgetPassword(userData:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", userData)
  }
  verifyResetCode(userData:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", userData)
  }
  resetPassword(userData:object):Observable<any>{
  
    return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", userData)
  }
 
}

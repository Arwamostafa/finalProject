import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators}from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){
  }
  isloading:boolean=false;
  apiError:string=''
  
  resetForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/)]),
    
  })
submitResetPassword(formData:FormGroup){
  this.isloading=true
  this._AuthService.resetPassword(formData.value).subscribe({
    next:(data)=>{
      if(data.token){
        this._Router.navigate(['/login'])
      }
      this.isloading=false
      console.log(data)},
    error:(err)=>{
      this.isloading=false
      this.apiError=err.error.message
      console.log(err)},
    complete:()=>{},
  })
  console.log(formData)
}
}

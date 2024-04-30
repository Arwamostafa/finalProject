import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators}from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading:boolean=false;
  apiError:string=''
  constructor(private _AuthService:AuthService, private _Router:Router){

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)]),
  },{validators:this.RepasswordMatch})

  RepasswordMatch(form:any){
   let password=form.get("password")
   let rePassword=form.get("rePassword")
   if(password?.value==rePassword?.value){
     return null
   }else{
    rePassword?.setErrors({repassword:"repassword Not Match Password"})
    return {repassword:"repassword Not Match Password"}
   }
  }
handelregistration(registerForm:FormGroup){
  this.isloading=true
  if(registerForm.valid){
    this._AuthService.register(registerForm.value).subscribe({
      next: (response) =>{
        if(response.message == 'success'){
           this.isloading=false
            this._Router.navigate(['/login'])
        }
      },
    error:(err)=>{
      this.isloading=false
       this.apiError= err.error.message
       
    },
    complete:()=>{
      this.isloading=false
    }
    }) 
    
    
    
  }
}
}

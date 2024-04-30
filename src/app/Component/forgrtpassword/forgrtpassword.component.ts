import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// declare let $:any

@Component({
  selector: 'app-forgrtpassword',
  templateUrl: './forgrtpassword.component.html',
  styleUrls: ['./forgrtpassword.component.css']
})
export class ForgrtpasswordComponent {
  errorMessage:string=""
constructor (private _AuthService:AuthService , private _Router:Router){}

forgetPassword: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required,Validators.email])
})
forgetPasswordSubmit(form:FormGroup){
  this._AuthService.forgetPassword(form.value).subscribe({
    next:(data)=>{
      if(data.statusMsg=='success'){
        // $(".reseCode").fedeIn(1000)
        // $(".forgetpassword").fedeOut(1000)
        document.querySelector(".reseCode")?.classList.remove("d-none")
        document.querySelector(".forgetpassword")?.classList.add("d-none")
      }
    console.log(data)
    },
    error:(err)=>{
       console.log(err)
    },
    complete:()=>{

    },
  })
console.log(form.value)
}
ResetCode:FormGroup = new FormGroup({
  resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+$/)])
})
ResetCodeSubmit(form:FormGroup){
  this._AuthService.verifyResetCode(form.value).subscribe({
    next:(data)=>{
      if (data.status == "Success"){
      this._Router.navigate(['/resetPassword'])
      }
    console.log(data)
    },
    error:(err)=>{
      this.errorMessage= err.error.message
       console.log(err.error.message)
    },
    complete:()=>{

    },
  })
}
}

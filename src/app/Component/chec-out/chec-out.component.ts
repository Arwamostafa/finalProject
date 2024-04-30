import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { FormControl ,FormGroup,Validator, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chec-out',
  templateUrl: './chec-out.component.html',
  styleUrls: ['./chec-out.component.css']
})
export class ChecOutComponent {
  id:string =' '
  constructor(private _cart:CartService, private _ActivatedRoute:ActivatedRoute){
 _ActivatedRoute.params.subscribe((data:any)=>{

  console.log(data)
  this.id=data.id
  
 })
  }
ShippingForm:FormGroup= new FormGroup({
  details:new FormControl(null,[Validators.required]),
  city:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required])

})
sendPaymentData(formData:FormGroup){
  console.log(formData.value);
  this._cart.checkPayment(this.id,formData.value).subscribe({
    next:(response)=>{
      window.location.href = response.session.url
     console.log(response.session.url);
     
    }
  })
}
}

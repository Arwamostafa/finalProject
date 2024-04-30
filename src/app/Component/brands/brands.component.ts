import { Component, OnInit } from '@angular/core';
import { ProuductService } from 'src/app/services/prouduct.service';
declare let $:any
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands:any[]=[]
  constructor(private _ProuductService:ProuductService){}
  ngOnInit(): void {
    $(".loading").fadeIn(0)
    this._ProuductService.getAllBrands().subscribe({
     
      next:(respone)=>{
        console.log(respone.data);
        this.brands= respone.data
      },complete:()=>{
        $(".loading").fadeOut(1000)
        }
    })
  }
}

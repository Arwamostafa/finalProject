import { Component, OnInit } from '@angular/core';
import { ProuductService } from 'src/app/services/prouduct.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
      
    },
    nav: true
  }
   categorySlider:any[]=[]
constructor(private _ProuductService:ProuductService){}
ngOnInit(): void {
  this._ProuductService.getAllCategory().subscribe({
   
    next:(respone)=>{
      console.log(respone.data);
      this.categorySlider= respone.data
    }
  })
}
}

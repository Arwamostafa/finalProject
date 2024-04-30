import { Component, OnInit } from '@angular/core';
import { ProuductService } from 'src/app/services/prouduct.service';

declare let $ :any
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:any[]=[]
  constructor(private _ProuductService:ProuductService){}
  ngOnInit(): void {
    $(".loading").fadeIn(0)
    this._ProuductService.getAllCategory().subscribe({
     
      next:(respone)=>{
        console.log(respone.data);
        this.categories= respone.data
      },complete:()=>{
        $(".loading").fadeOut(1000)
      }   
     })
  }
}

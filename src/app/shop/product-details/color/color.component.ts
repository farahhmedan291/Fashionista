import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() name:string='N/A';
  @Input() id:number | undefined;
  @Input()productId:number | undefined;
  
  
  constructor(public home:HomeService) { 
    // console.log(home.ProductColor);
    // home.ProductColor.forEach((element: any)  => {
    //   console.log(element.name);
    //   console.log(element.id);
    //   console.log(element.productId);
      
    // });
    
  }

  ngOnInit(): void {
  }
  onItemChange(value : any){
    localStorage.setItem('color',value);
  }
}

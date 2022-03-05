import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  @Input() name:string='N/A';
  @Input() id:number | undefined;
  @Input()productId:number | undefined;
  
  constructor(public home:HomeService) {
    //console.log(home.ProductSize)
   }

  ngOnInit(): void {
  }
  
}

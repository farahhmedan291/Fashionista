import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public home:HomeService) { }

  @Input() id:number|undefined;

  @Input() name:string="N/A"

  @Input() description:string|undefined

  @Input() priceBeforDiscount:number|undefined

  @Input() priceAfterDiscount:number|undefined

  @Input() quantity:number|undefined

  @Input() state:string|undefined

  @Input() discountId:number|undefined

  @Input() categoryId:number|undefined

  ngOnInit(): void {
  }

}

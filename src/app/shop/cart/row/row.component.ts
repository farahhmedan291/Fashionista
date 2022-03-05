import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css',
  '../../../../assets/css/style.css',
  '../../../../assets/css/bootstrap.min.css',
'../../../../assets/css/animate.min.css',
'../../../../assets/css/flaticon.css',
'../../../../assets/css/slicknav.css',
'../../../../assets/css/magnific-popup.css',
'../../../../assets/css/fontawesome-all.min.css',
'../../../../assets/css/themify-icons.css',
'../../../../assets/css/slick.css',
'../../../../assets/css/nice-select.css']
})
export class RowComponent implements OnInit {
  constructor(public home:HomeService) { }
  total:number|undefined;
  sum:number=0;
  @Input() id :number | undefined;

  @Input() userId:number | undefined;

  @Input() productId:number|undefined;

  @Input() quantity:number|undefined;

  @Input() price:number|undefined;
  @Input() name :string | undefined;
  @Input() color :string | undefined;
  @Input() size :string | undefined;
  @Input() imageName :string | undefined;

  ngOnInit(): void {
if(this.price &&this.quantity){
  this.total=this.price*this.quantity;
  
}
this.home.carProduct.forEach((element:any) => {
  this.sum+=element.price*element.quantity;
});
}
reomve(){
  if(this.id){
  this.home.deletefromCart(this.id);
}
}
}

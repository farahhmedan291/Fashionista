
import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css',
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
export class BillingDetailsComponent implements OnInit {
  total:number|undefined;
  sum:number=0;
  @Input() id :number | undefined;

  @Input() userId:number | undefined;

  @Input() productId:number|undefined;

  @Input() quantity:number|undefined;

  @Input() price:number|undefined;
  @Input() name :string | undefined;
  constructor(public home:HomeService) { }

  ngOnInit(): void {
    if(this.price &&this.quantity){
      this.total=this.price*this.quantity;
      
    }
    this.home.carProduct.forEach((element:any) => {
      this.sum+=element.price*element.quantity;
    });
    }
  }

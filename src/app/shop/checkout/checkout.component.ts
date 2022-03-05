
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css',
  '../../../assets/css/style.css',
  '../../../assets/css/bootstrap.min.css',
'../../../assets/css/animate.min.css',
'../../../assets/css/flaticon.css',
'../../../assets/css/slicknav.css',
'../../../assets/css/magnific-popup.css',
'../../../assets/css/fontawesome-all.min.css',
'../../../assets/css/themify-icons.css',
'../../../assets/css/slick.css',
'../../../assets/css/nice-select.css']
})
export class CheckoutComponent implements OnInit {
  name = new FormControl('',Validators.required);
  number = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required,Validators.email]);
  add1 = new FormControl('',Validators.required);
  sum:number=0;
  total:number=3;
  moneyBefor:any;
  moneyAfter:any;
  id:number|undefined;
  constructor(private router: Router, private spinner:NgxSpinnerService,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getuserById();
    this.home.carProduct.forEach((element:any) => {
      
      this.sum+=parseInt(element.price) *parseInt(element.quantity);
    });
    this.total+=this.sum;
    this.home.getTotal(this.total);

  }
  confirmation(){
    if(localStorage.getItem('userId')){
      this.id=parseInt(localStorage.getItem('userId')||'{}');
      debugger
      this.home.getMoney(this.id);
      debugger
      this.home.makeCartEmpty(this.id);
      debugger
      this.home.GetCreditCardID(this.id)
      debugger
      this.home.UpdateUserInfo(this.id,this.name,this.number,this.email,this.add1);

    }
    debugger
    
  }

  


}
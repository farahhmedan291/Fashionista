
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/service/home.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css',
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
export class CartComponent implements OnInit {
  sum:number=0;
  total:number=3;


  constructor(private router: Router, private spinner:NgxSpinnerService,public home:HomeService) { }

  ngOnInit(): void {
  }
  Checkout(){

    if(localStorage.getItem('userId')){
      let id=parseInt(localStorage.getItem('userId')||'{}');
      this.home.CheckOut(id);
    }
    
  }
}

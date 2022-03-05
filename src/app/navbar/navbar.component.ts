import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from '../service/home.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
  '../../assets/css/style.css',
  '../../assets/css/bootstrap.min.css',
'../../assets/css/animate.min.css',
'../../assets/css/flaticon.css',
'../../assets/css/slicknav.css',
'../../assets/css/magnific-popup.css',
'../../assets/css/fontawesome-all.min.css',
'../../assets/css/themify-icons.css',
'../../assets/css/slick.css',
'../../assets/css/nice-select.css'
]
})
export class NavbarComponent implements OnInit {

  constructor(public homeSer : HomeService ,private router: Router, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  gotoProfile()
  {
    this.router.navigate(['client/profile']);
  }
  signout(){
  
      localStorage.removeItem('token');
      this.router.navigate(['']);
      }
  home()
  {
    this.router.navigate(['Home']);
  }
  about()
  {
    this.router.navigate(['about']);
  }
  contact()
  {
    this.router.navigate(['contact']);

  }
shop()
{
 
  this.router.navigate(['shop']);
 
}
serach(){
  this.router.navigate(['Search']);
}
cart(){

  if(localStorage.getItem('userId')){

    let id=parseInt(localStorage.getItem('userId')||'{}');

    this.homeSer.getCart(id);

  }
}

}

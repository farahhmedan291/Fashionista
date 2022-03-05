import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css',
  '../../assets/css/style.css',
  '../../assets/css/bootstrap.min.css',
'../../assets/css/animate.min.css',
'../../assets/css/flaticon.css',
'../../assets/css/slicknav.css',
'../../assets/css/magnific-popup.css',
'../../assets/css/fontawesome-all.min.css',
'../../assets/css/themify-icons.css',
'../../assets/css/slick.css',
'../../assets/css/nice-select.css',
'../../assets/css/owl.carousel.min.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css',
  '../../assets/css/style.css',
  '../../assets/css/bootstrap.min.css',
'../../assets/css/animate.min.css',
'../../assets/css/flaticon.css',
'../../assets/css/slicknav.css',
'../../assets/css/magnific-popup.css',
'../../assets/css/fontawesome-all.min.css',
'../../assets/css/themify-icons.css',
'../../assets/css/slick.css',
'../../assets/css/nice-select.css']
})
export class ShopComponent implements OnInit {


  constructor(public admin :AdminService,private router: Router,public home:HomeService, private spinner:NgxSpinnerService,private toast:ToastrService) { }



  ngOnInit(): void {

    //this.getAll();

    this.getAll();

  }

  getAll()

  {

  this.spinner.show();

  debugger
  
  this.home.getAllProduct().subscribe((res:any)=>{
    this.home.allProduct=res;

    this.spinner.hide();

    this.toast.success('data retreived');
  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
    this.router.navigate(['']);
  })
  

  
}


}

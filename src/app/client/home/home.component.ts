import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,public home:HomeService, private spinner:NgxSpinnerService,private toast:ToastrService) { }



  ngOnInit(): void {

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
  }
  // ,err =>{
  //   this.spinner.hide();
  //   this.toast.error('something went wrong!');
  // }
  
  
  )

  this.spinner.hide();
 
  }

 

}

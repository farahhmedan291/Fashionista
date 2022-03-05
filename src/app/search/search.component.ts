import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css',
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
export class SearchComponent implements OnInit {

  constructor(public admin :AdminService,private router: Router,public home:HomeService, private spinner:NgxSpinnerService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.admin.getAllProduct();

  }
  getData(e:any){
    this.spinner.show();
      
    debugger
    
    this.admin.Getbyname(e.target.value).subscribe((res:any)=>{
      this.admin.allProducts=res;
  
      this.spinner.hide();
  
      this.toast.success('data retreived');
    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);

    })
    
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

        })
        
      
        
      }
}

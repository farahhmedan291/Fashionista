import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css',
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
export class ReviewComponent implements OnInit {

  @Input() id:number | undefined;
  @Input() userId:number | undefined;
  @Input() productId:number | undefined;
  @Input() rate:number | undefined ;
  @Input() reviewText:string='N/A';

  constructor(public home:HomeService,private http:HttpClient, private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService,public dialog: MatDialog) { }
  user:any=[{}];
  ngOnInit(): void {
    this.SelectuserByID();
  }
  SelectuserByID()
  {
   
    this.http.get('https://localhost:44346/api/Users/SelectUserByID/'+this.userId).subscribe((data:any)=>{
      debugger
      this.user=data;
      console.log(this.user);

    },err=>{
      this.toast.error(err.status);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../../service/home.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css',

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
export class EditEmployeeComponent implements OnInit {

 salary= new FormControl('');

 profit= new FormControl('');
 losses= new FormControl('');

  constructor(public home:HomeService,private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService){}
 id:number | undefined;

  ngOnInit(): void {
   this.id=parseInt(localStorage.getItem('EmployeeId') || '{}') ;
   this.admin.getuserById(this.id);

  }
  

  submit()
  {
 debugger
  if(this.id!=null){
        var body={
          id: this.id ,
        salary:parseFloat(this.salary.value) ,
        profit:parseFloat(this.profit.value),
        losses:parseFloat(this.losses.value)       
       };
        const headerDct={
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
        const requestOptions={
          headers:new HttpHeaders(headerDct)
        }
        this.spinner.show();
        debugger
        this.http.put('https://localhost:44346/api/Users/updateFinance',body,requestOptions).subscribe((data:any)=>{
          debugger
          console.log(data);
          this.spinner.hide();
          this.toast.success('data updated successfully');
        },err=>{
          this.spinner.hide();
          this.toast.error(err.status);

        })
          }
}

}

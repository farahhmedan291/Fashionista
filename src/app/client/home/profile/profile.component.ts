import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
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
export class ProfileComponent implements OnInit {
  
  name = new FormControl('',Validators.required);
  number = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required,Validators.email]);
  add1 = new FormControl('',Validators.required);
  birth = new FormControl('',Validators.required);


  constructor(private router: Router,public homes:HomeService,private http:HttpClient, private spinner:NgxSpinnerService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.homes.getuserById();
  }

  imageName='';
salary=0;
profit=0;
losses=0;
departmentId=5;
submit()
{
  const id=localStorage.getItem('userId');
  if(id!=null){
var body={
  id: parseInt(id) ,
name:this.name.value.toString(),
phoneNumber:this.number.value.toString(),
email:this.email.value.toString(),
address:this.add1.value.toString(),
birthDate:this.birth.value.toString(),
imageName:this.imageName,
salary:this.salary,
profit:this.profit,
losses:this.losses,
departmentId:this.departmentId

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
this.http.put('https://localhost:44346/api/Users',body,requestOptions).subscribe((data:any)=>{
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

  signout(){
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
AddCreditCard(){
  this.router.navigate(['client/CreditCard']);

}
}

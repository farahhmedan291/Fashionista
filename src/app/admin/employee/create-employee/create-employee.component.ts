import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  id = new FormControl('');

 name= new FormControl('');

  phoneNumber= new FormControl('');

  email= new FormControl('');

 address= new FormControl('');

 birthDate= new FormControl('');

 imageName= new FormControl('');

 salary= new FormControl('');

 profit= new FormControl('');
 losses= new FormControl('');

  departmentId: number | undefined;


  constructor(private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService){}

  ngOnInit(): void {
  }
  EmployeeId=0;
  onItemChange(id : any){
    this.departmentId=parseInt(id);
      }

      submit()
      {


var body={

name:this.name.value.toString(),
phoneNumber:this.phoneNumber.value.toString(),
email:this.email.value.toString(),
address:this.address.value.toString(),
birthDate:"2021-01-01T01:00:00",
imageName:"test",
salary:parseFloat(this.salary.value) ,
profit:0,
losses:0,
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
this.http.post('https://localhost:44346/api/Users/InsertEmployee',body,requestOptions).subscribe((data:any)=>{
  debugger
  console.log(data);
  this.EmployeeId=data.id;
  this.insertLogin();
  this.spinner.hide();
  this.toast.success('user added successfully');
  window.location.reload();
},err=>{
  this.spinner.hide();
  this.toast.error(err.status);

})
      }


      insertLogin()
      {
        var roleName;
        if(this.departmentId == 2 )
        roleName="Delivery";
        else if(this.departmentId == 3 )
        roleName="Accountant";

        var body={
          userName:this.name.value.toString(),
          password:"123456789",
          userId:this.EmployeeId,
          roleName:roleName
          
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
          this.http.post('https://localhost:44346/api/Login/InsertLogin',body,requestOptions).subscribe((data:any)=>{
            debugger
            console.log(data);
           
            this.spinner.hide();
            this.toast.success('user added successfully');
          },err=>{
            this.spinner.hide();
            this.toast.error(err.status);
          
          })
      }


}

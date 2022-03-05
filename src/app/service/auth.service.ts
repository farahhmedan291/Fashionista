import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Injectable } from '@angular/core';



import { FormControl } from '@angular/forms';



import { Router } from '@angular/router';



import jwtDecode from 'jwt-decode';



import { NgxSpinnerService } from 'ngx-spinner';



import { ToastrService } from 'ngx-toastr';



import { HomeService } from './home.service';




@Injectable({

  providedIn: 'root'

})
export class AuthService {
  
  constructor(public home:HomeService,private spinner: NgxSpinnerService, private router: Router,private http:HttpClient,private toast:ToastrService) { }



  userName=new FormControl('');



  password=new FormControl('');


  submit(userName:any,password:any) {
    var body={
      userName:userName.value.toString(),
      password:password.value.toString()
    };
    const headerDct={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDct)
    }
    this.spinner.show();
   
    this.http.post('https://localhost:44346/api/jwtAuth/authLogin',body,requestOptions).subscribe((res:any)=>{

      let responce1=res;
      const responce={
        token:responce1.toString()
        

      };
     
      localStorage.setItem('token',responce.token);
      let data:any=jwtDecode(responce.token);//user name, role name as object
      localStorage.setItem('user',JSON.stringify({...data}));
      if(data.role=='admin'){

        this.router.navigate(['admin']);
      }
else if(data.role=='Delivery'){

  this.router.navigate(['delivery']);
}
else if(data.role=='Accountant'){

  this.router.navigate(['accountant']);
}
    else{
      this.router.navigate(['Home']);
    }

    this.spinner.hide();
   
    })

}


SignUp(id:any,userName:any,password:any){

  var body={

    userName:userName,

    password:password,

    userId:parseInt(id.id),

    roleName:"client"



  };

  const headerDct={

    'Content-Type':'application/json',

    'Accept':'application/json'

  }

  const requestOptions={

    headers:new HttpHeaders(headerDct)

  }

  debugger

  this.http.post('https://localhost:44346/api/Login/InsertLogin',body,requestOptions).subscribe((res:any)=>{

debugger

  console.log(res);

})

}

RegisterUser(name:any,phoneNumber:any,email:any,userName:any,password:any){

  var body={

    name:name,

    phoneNumber:phoneNumber,

    email:email



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

  this.http.post('https://localhost:44346/api/Users/RegisterUser',body,requestOptions).subscribe((res:any)=>{

debugger

    let userId=res;

    debugger

    this.SignUp(userId,userName,password);

   debugger

   this.router.navigate(['']);

  this.toast.success("your account has been created successfully")

  this.spinner.hide();

 

 

  })}


}


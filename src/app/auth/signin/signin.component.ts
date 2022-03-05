import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css',
  '../../../assets/css/style.css',
  '../../../assets/css/bootstrap.min.css',
'../../../assets/css/animate.min.css',
'../../../assets/css/flaticon.css',
'../../../assets/css/slicknav.css',
'../../../assets/css/magnific-popup.css',
'../../../assets/css/fontawesome-all.min.css',
'../../../assets/css/themify-icons.css',
'../../../assets/css/slick.css',
'../../../assets/css/nice-select.css',
'../../../assets/css/owl.carousel.min.css']
})
export class SigninComponent implements OnInit {
  userName = new FormControl('');

  password = new FormControl('', [

    Validators.required,

    Validators.minLength(8),

  ]);
  rememberMe= new FormControl('');
 

  constructor(private router: Router,private fb :FormBuilder,public auth:AuthService,private http:HttpClient) {}



  ngOnInit(): void {

    if(localStorage.getItem('userName')!=null){
      this.userName.setValue(localStorage.getItem('userName'));
      this.password.setValue(localStorage.getItem('MyPassword'));
    }

  }

  getuserbyName(name : any)
{
 
  

  this.http.get('https://localhost:44346/api/Login/getuserbyName/'+name).subscribe((data:any)=>{
    
   debugger
    localStorage.setItem('userId',data);
    console.log(data);
    debugger
  });
  


}
  submit(){

    if(this.rememberMe.value)
    {
     
      localStorage.setItem('userName',this.userName.value);
      localStorage.setItem('MyPassword',this.password.value);
       var name= this.userName.value;
       console.log(name);
       debugger
       this.getuserbyName(name);
       debugger
    }else
    {
      localStorage.removeItem('userName');
      localStorage.removeItem('MyPassword');
    }
    
    this.auth.submit(this.userName,this.password);
    

  }

  signup(){
    this.router.navigate(['signup']);
  }


  signin(){
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
  
}

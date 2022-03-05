import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
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
export class SignupComponent implements OnInit {
  registerForm:FormGroup= new FormGroup({
    name:new FormControl('',[Validators.required]),

    userName:new FormControl('',[Validators.required]),

    email:new FormControl('',[Validators.required,Validators.email]),

    phoneNumber:new FormControl('',[Validators.required]),

    password:new FormControl('',[Validators.required,Validators.minLength(8)]),

    confirmPassword:new FormControl ('', [Validators.required]),



  })
  constructor(private router: Router,public auth:AuthService) { }

 

  submit(){

    let name=this.registerForm.controls['name'].value;
    let userName=this.registerForm.controls['userName'].value;
    let email=this.registerForm.controls['email'].value;
    let phoneNumber=this.registerForm.controls['phoneNumber'].value;
    let password=this.registerForm.controls['password'].value;
    this.auth.RegisterUser(name,phoneNumber,email,userName,password);
  };

  onchange(){

    if (this.registerForm.controls.password.value== this.registerForm.controls.confirmPassword.value)

    {

      this.registerForm.controls.confirmPassword.setErrors(null);

    }

    else{

        this.registerForm.controls.confirmPassword.setErrors({mismatch:true});

    }

    }

  ngOnInit(): void {
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

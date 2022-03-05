import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css',
  '../../../../../assets/css/style.css',
  '../../../../../assets/css/bootstrap.min.css',
'../../../../../assets/css/animate.min.css',
'../../../../../assets/css/flaticon.css',
'../../../../../assets/css/slicknav.css',
'../../../../../assets/css/magnific-popup.css',
'../../../../../assets/css/fontawesome-all.min.css',
'../../../../../assets/css/themify-icons.css',
'../../../../../assets/css/slick.css',
'../../../../../assets/css/nice-select.css']
})
export class CreditCardComponent implements OnInit {
  creditCadrNumber = new FormControl('',[Validators.required,Validators.maxLength(5)]);
  expiredDate = new FormControl('',Validators.required);
  moneyAmount:number=-1;

  constructor(private http:HttpClient,private router: Router,public homeSer:HomeService,private toast:ToastrService) { }

  ngOnInit(): void {
  }
  submit(){
    if(localStorage.getItem('userId')){
      debugger
      let id=parseInt(localStorage.getItem('userId')||'{}');
      debugger
      this.http.get('https://localhost:44346/api/CreditCard/GetMoneyAmount/'+id).subscribe((data:any)=>{

        this.moneyAmount=data;
        debugger
        if(this.moneyAmount<=0){
          let cardNum=this.creditCadrNumber.value;
          let expiredDate=this.expiredDate.value;
      
          debugger
          this.homeSer.addcreditCard(cardNum,expiredDate)}
          else{
           this.toast.error("you have already added credit-card before") 
          }

      })

    // if(!this.moneyAmount){
    // let cardNum=this.creditCadrNumber.value;
    // let expiredDate=this.expiredDate.value;

    // debugger
    // this.homeSer.addcreditCard(cardNum,expiredDate)}
    // else{
    //  this.toast.error("you have already added credit-card before") 
    // }
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
}

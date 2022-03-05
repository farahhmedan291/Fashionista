import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

export interface ordersInfo {
  id :number;
  name: string,
  phoneNumber: string,
  email: string,
  address: string}
@Injectable({
  providedIn: 'root'
})

export class DeliveryService {
  userId:number=0;
  constructor(private http:HttpClient,private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService) { }
  GetOrdersInformation():Observable<ordersInfo[]>{
    return this.http.get<ordersInfo[]>('https://localhost:44346/api/CheckOut/GetNewOrders');
  
  }



  UpdateDeliveryInformation(status:any,latitude:any,longitude:any){
debugger
if(localStorage.getItem('userId')){

   this.userId=parseInt(localStorage.getItem('userId')||'{}');

}
    var body={
      status:status,
      latitude: latitude,
      longitude:longitude,
      userId:this.userId
    };
  
    const headerDct={
  
      'Content-Type':'application/json',
  
      'Accept':'application/json'
  
    }
    const requestOptions={
  
      headers:new HttpHeaders(headerDct)
  
    }
  
    debugger
  
    this.spinner.show();
  
    debugger
  
      return this.http.put('https://localhost:44346/api/DeliveryInformation',body,requestOptions).subscribe((res:any)=>{
  
        debugger  
        console.log(res);
      this.spinner.hide();
  this.toast.success("Data saved successfully")
  
       },err=>{
  
         console.log(err);
  
  
      this.spinner.hide();
  
  
     
  
      })
  
  }


  Delivery(id:any,deliveredDate:any){
    debugger
        var body={
          id:id,
          delivered: 1,
          deliveredDate:deliveredDate,
      
      
        };
      
        const headerDct={
      
          'Content-Type':'application/json',
      
          'Accept':'application/json'
      
        }
        const requestOptions={
      
          headers:new HttpHeaders(headerDct)
      
        }
      
        debugger
      
        this.spinner.show();
      
        debugger
      
          return this.http.post('https://localhost:44346/api/CheckOut/Delivery',body,requestOptions).subscribe((res:any)=>{
      
            debugger  
            window.location.reload()
            console.log(res);
          this.spinner.hide();
      
      
           },err=>{
      
             console.log(err);
      
      
          this.spinner.hide();
      
      
         
      
          })
      
      }
}

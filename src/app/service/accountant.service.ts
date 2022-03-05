import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


export interface clientInfo {
  id :number;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  birthDate:string;
  imageName:string;
  salary :number;
  profit :number;
  losses :number;
  departmentId :number;
}

export interface empInfo {
  id :number;
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  birthDate:string;
  imageName:string;
  salary :number;
  profit :number;
  losses :number;
  departmentId :number;
}

export interface productInfo {
  id :number;
  name: string;
  description: string;
  priceBeforDiscount: number;
  priceAfterDiscount: number;
  quantity:number;
  state:string;
  categoryId :number;
  productSales:number;
}

export interface ordersInfo {
  id :number;
  date: Date,
  totalPrice: number,
}

@Injectable({
  providedIn: 'root'
})
export class AccountantService {
  constructor(private http:HttpClient, private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService) { }
  GetClientsInformation():Observable<clientInfo[]>{
   return this.http.get<clientInfo[]>('https://localhost:44346/api/Users/GetClientsInformation');

 }

 GetemployeesInformation():Observable<empInfo[]>{
  return this.http.get<empInfo[]>('https://localhost:44346/api/Users/GetemployeesInformation');

}

GetProductsInformation():Observable<productInfo[]>{
  return this.http.get<productInfo[]>('https://localhost:44346/api/Product/SelectAllProduct');

}

GetAllOrders():Observable<ordersInfo[]>{
  return this.http.get<ordersInfo[]>('https://localhost:44346/api/CheckOut/SelectAllCheckOut');
}

}


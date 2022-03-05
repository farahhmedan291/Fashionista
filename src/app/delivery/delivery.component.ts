import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DeliveryService, ordersInfo } from '../service/delivery.service';

interface Status {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css',
  '../../assets/css/style.css',
  '../../assets/css/bootstrap.min.css',
  '../../assets/css/animate.min.css',
  '../../assets/css/flaticon.css',
  '../../assets/css/slicknav.css',
  '../../assets/css/magnific-popup.css',
  '../../assets/css/fontawesome-all.min.css',
  '../../assets/css/themify-icons.css',
  '../../assets/css/slick.css',
  '../../assets/css/nice-select.css',
  '../../assets/css/owl.carousel.min.css']
})

export class DeliveryComponent implements OnInit {
  selectedValue: string | undefined;

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  status: Status[] = [
    {value: 'a', viewValue: 'Available'},
    {value: 'u', viewValue: 'Unavailable'}
  ];
  orderData:ordersInfo[]=[];
  columnsToDisplay = ['id','name', 'phoneNumber', 'email','address','actions'];

  constructor(public delivery:DeliveryService, private spinner:NgxSpinnerService) {
    this.delivery.GetOrdersInformation().subscribe((x) => {
      this.spinner.show();
      this.orderData = x;
      this.spinner.hide();
    });
   }

  ngOnInit(){

    
  }
  getID(id:any){
    let toady = new Date();
  console.log(toady.getUTCDate())
  var todayDate = new Date(toady.getFullYear(), toady.getMonth(), toady.getDate());
  debugger
  this.delivery.Delivery(id,todayDate);
  }
  getlocation(){
    navigator.geolocation.getCurrentPosition((position) => {
    //   this.latitude=position.coords.latitude.toString();
    //  this.longitude=position.coords.longitude.toString();
     this.delivery.UpdateDeliveryInformation(this.selectedValue,position.coords.latitude.toString(),position.coords.longitude.toString())

    });
  }
  
}
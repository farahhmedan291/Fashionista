import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from 'src/app/service/admin.service';


export interface Tile {
 
  cols: number;
  rows: number;
  text: any;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css',
  '../../../assets/css/style.css',
  '../../../assets/css/bootstrap.min.css',
'../../../assets/css/animate.min.css',
'../../../assets/css/flaticon.css',
'../../../assets/css/slicknav.css',
'../../../assets/css/magnific-popup.css',
'../../../assets/css/fontawesome-all.min.css',
'../../../assets/css/themify-icons.css',
'../../../assets/css/slick.css',
'../../../assets/css/nice-select.css']
})


export class ProductDetailsComponent implements OnInit {
  size:any;
  color:any;
 
 

  

  Message = new FormControl('');

  constructor(public admin : AdminService ,public home:HomeService,private http:HttpClient, private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.SelectLengthByID();
    // this.SelectNecklineByID();
    // this.SelectSeasonByID();
    // this.SelectSleeveLengthByID();
    // this.SelectStyleByID();
    // this.SelectSkinColorByID();
    // this.SelectAgeByID();
    // this.SelectMaterialByID();

    this.admin.SelectProductImageByID(parseInt(localStorage.getItem('ProductId') || '{}'));

    
  }
  tiles: Tile[] = [
    {text: "this.admin.ProductImages[0].imageName", cols: 3, rows: 1},
    {text:  "this.admin.ProductImages[1].imageName", cols: 1, rows: 2},
    {text:  "this.admin.ProductImages[2].imageName", cols: 1, rows: 1},
    {text:   "this.admin.ProductImages[3].imageName", cols: 2, rows: 1},
  ];

  value = 1;

  handleMinus() {
    if(this.value >1)
        this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  submit(){

     var body={
      userId:parseInt(localStorage.getItem('userId') || '{}') ,
      productId:parseInt(localStorage.getItem('ProductId') || '{}'),
      rate:4.5,
      reviewText:this.Message.value.toString()
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
    this.http.post('https://localhost:44346/api/Reviews/InsertReviews',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('Your Review sent successfully');

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
   
  }
  onItemChange(value : any){
    localStorage.setItem('size',value);
    this.size=value;
  }

  onItemChange2(value : any){
    localStorage.setItem('color',value);
    this.color=value;
  }
  openDialog() {

    const dialogRef = this.dialog.open(SizeGuideComponent);

  }
  addtoCustomerProduct()
  {
    if(this.home.selectedProduct.id)
     {

         // console.log(this.selectProductColor);
    var body={
      userId:parseInt(localStorage.getItem('userId') || '{}') ,
      productId:this.home.selectedProduct.id,
      quantity:this.value,
      price:this.home.selectedProduct.priceAfterDiscount,
      color:this.color,
      size:this.size 
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
    this.http.post('https://localhost:44346/api/CustomerProduct/InsertCustomerProduct',body,requestOptions).subscribe((data:any)=>{
      debugger

      console.log(data);
      
      this.spinner.hide();
      this.toast.success('The Item added to Cart');

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
 
     }
     else{
       this.toast.warning('This item cannot be added!!')
     }
  }
  // ProductLength:any=[{}];
  // SelectLengthByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Length/SelectLengthById/'+id).subscribe((data:any)=>{
      
  //     this.ProductLength=data;
  //     console.log(this.ProductLength);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }

  // ProductNeckline:any=[{}];
  // SelectNecklineByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Neckline/SelectNecklineById/'+id).subscribe((data:any)=>{
      
  //     this.ProductNeckline=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }


  // ProductSeason:any=[{}];
  // SelectSeasonByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Season/SelectSeasonById/'+id).subscribe((data:any)=>{
      
  //     this.ProductSeason=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }


  // ProductSleeveLength:any=[{}];
  // SelectSleeveLengthByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/SleeveLength/SelectSleeveLengthById/'+id).subscribe((data:any)=>{
      
  //     this.ProductSleeveLength=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }


  // ProductStyle:any=[{}];
  // SelectStyleByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Style/SelectStyleById/'+id).subscribe((data:any)=>{
      
  //     this.ProductStyle=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }

  // ProductSkinColor:any=[{}];
  // SelectSkinColorByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/SkinColor/SelectSkinColorById/'+id).subscribe((data:any)=>{
      
  //     this.ProductSkinColor=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }


  // ProductAge:any=[{}];
  // SelectAgeByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Age/SelectAgeByID/'+id).subscribe((data:any)=>{
      
  //     this.ProductAge=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }


  // ProductMaterial:any=[{}];
  // SelectMaterialByID()
  // {
  //  const id=parseInt(localStorage.getItem('ProductId') || '{}');
  //   this.http.get('https://localhost:44346/api/Material/SelectMaterialById/'+id).subscribe((data:any)=>{
      
  //     this.ProductMaterial=data;
  //    // console.log(this.ProductSize);

  //   },err=>{
  //     this.toast.error(err.status);
  //   })
  // }



}

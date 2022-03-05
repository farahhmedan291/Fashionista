import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  name = new FormControl('');
  image1 = new FormControl('');
  image2 = new FormControl('');
  image3 = new FormControl('');
  image4 = new FormControl('');
  description = new FormControl('');
  priceBeforDiscount = new FormControl('');
  priceAfterDiscount = new FormControl('');
  quantity = new FormControl('');
  state = new FormControl('');
  categoryId : number | undefined;
  color: FormGroup;
  value:any=[{}];
  size: FormGroup;
productId:any;

  constructor(fb: FormBuilder,private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService) 
  {

    this.color = fb.group({
      white: false,
      black: false,
      blue: false,
      pink: false,
      green: false,
      red: false,
      gold:false
    });
    this.size = fb.group({
      S: false,
      M: false,
      L: false,
      XL: false
    });
  
   }
   event1:any;
   event2:any;
   event3:any;
   event4:any;


  ngOnInit(): void {
    //this.admin.getAllCategories();
  }
addColor()
{
  

  if(this.color.controls['white'].value)
       this.admin.insertColor("white",this.productId);
  if(this.color.controls['black'].value)
       this.admin.insertColor("black",this.productId);
  if(this.color.controls['blue'].value)
       this.admin.insertColor("blue",this.productId);
  if(this.color.controls['pink'].value)
       this.admin.insertColor("pink",this.productId);
  if(this.color.controls['green'].value)
       this.admin.insertColor("green",this.productId);
  if(this.color.controls['red'].value)
       this.admin.insertColor("red",this.productId);
  if(this.color.controls['gold'].value)
       this.admin.insertColor("gold",this.productId);

}

addSize()
{
console.log(this.size.controls['S'].value);
  if(this.size.controls['S'].value)
       this.admin.insertSize("S",this.productId);
  if(this.size.controls['M'].value)
       this.admin.insertSize("M",this.productId);
  if(this.size.controls['L'].value)
       this.admin.insertSize("L",this.productId);
  if(this.size.controls['XL'].value)
       this.admin.insertSize("XL",this.productId);
}


  onItemChange(id : any){
this.categoryId=parseInt(id);
  }



  onsubmit(){
   // this.admin.insertProduct(this.name.value);


   debugger
   var body={
    name: this.name.value.toString(),
    description: this.description.value,
    priceBeforDiscount: parseFloat( this.priceBeforDiscount.value),
    priceAfterDiscount:parseFloat( this.priceAfterDiscount.value),
    quantity:parseInt(this.quantity.value),
    state:this.state.value,
    categoryId: this.categoryId,
    productSales:0

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
  this.http.post('https://localhost:44346/api/Product/InsertProduct',body,requestOptions).subscribe((data:any)=>{
    debugger
    console.log(data);
    this.productId=data.id;
    console.log(this.productId);
      this.addColor();
      this.addSize();
    this.insertImages();
    this.spinner.hide();
    this.toast.success('The Item added successfully');

    window.location.reload();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
   }

   insertImages()
   {
     
    this.admin.insertImages(this.image1.value,this.productId ,1 );
    this.admin.insertImages(this.image2.value,this.productId ,0);
    this.admin.insertImages(this.image3.value,this.productId ,0);
    this.admin.insertImages(this.image4.value,this.productId ,0);

   }

  //  insertImages()
  //  {
  //    console.log(this.image1.value);
  //   this.admin.insertImages(this.image1.value,this.productId );
  //   this.admin.insertImages(this.image2.value,this.productId );
  //   this.admin.insertImages(this.image3.value,this.productId );
  //   this.admin.insertImages(this.image4.value,this.productId );

  //  }

  //  uploadFile1(event:any) {
  //   this.event1=event;
   
  //   }

  //   uploadFile2(event:any) {
  //     this.event2=event;
     
  //     }

  //     uploadFile3(event:any) {
  //       this.event3=event;
       
  //       }
  //       uploadFile4(event:any)
  //       {
  //         this.event4=event;
  //       }
  //       uploadFile(event:any,num : any) {
  //         debugger
         
  //        var file=event.target.files[0];
  //        const formData:FormData=new FormData();
  //        formData.append('file',file,file.name);
         
  //        debugger
  //        this.http.post('https://localhost:44346/api/Product/saveFile',formData)
  //        .subscribe((data:any)=>{
  //         debugger
  //         if(parseInt(num) ==1)
  //         {
  //           var temp='../../../../assets/img/Product/'+data;
  //           console.log("temp = ",temp);
  //           this.image1.setValue ('../../../../assets/img/category/'+data);

  //           console.log("ts image = ",this.image1.value);

  //           this.admin.insertImages(this.image1.value,this.productId );
  //         }
          
  //         else  if(parseInt(num) ==2){

        
  //         this.image2.setValue ('../../../../assets/img/Product/'+data);
  //         this.admin.insertImages(this.image2.value,this.productId );
  //         }
  //         else  if(parseInt(num) ==3){
  //         this.image3.setValue ('../../../../assets/img/Product/'+data);
  //         this.admin.insertImages(this.image3.value,this.productId );
  //         }
  //         else  if(parseInt(num) ==4){
  //         this.image4.setValue ('../../../../assets/img/Product/'+data);
  //         this.admin.insertImages(this.image4.value,this.productId );}
         
  //          debugger
  //        })
         
  //         }


          

}

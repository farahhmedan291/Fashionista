import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css',
  '../../../../assets/css/style.css',
  '../../../../assets/css/bootstrap.min.css',
'../../../../assets/css/animate.min.css',
'../../../../assets/css/flaticon.css',
'../../../../assets/css/slicknav.css',
'../../../../assets/css/magnific-popup.css',
'../../../../assets/css/fontawesome-all.min.css',
'../../../../assets/css/themify-icons.css',
'../../../../assets/css/slick.css',
'../../../../assets/css/nice-select.css']
})
export class EditProductComponent implements OnInit {

  id :number | undefined;
  name = new FormControl('');
  description = new  FormControl('');
  priceBeforDiscount = new  FormControl('');
  priceAfterDiscount = new  FormControl('');
  quantity = new  FormControl('');
  state = new  FormControl('');
  categoryId : number | undefined;
  productSales : number | undefined;

  image1 = new FormControl('');
  image2 = new FormControl('');
  image3 = new FormControl('');
  image4 = new FormControl('');

  color: FormGroup;
  value:any=[{}];
  size: FormGroup;

  constructor(fb: FormBuilder,private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService) { 

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

  ngOnInit(): void {

    if(localStorage.getItem('ProductId') != null){
      this.id=parseInt(localStorage.getItem('ProductId') || '{}' );
      this.admin.getProductById( this.id);
      this.admin.SelectProductImageByID(this.id);

 } 

 this.admin.getAllCategories();
  }

  
   addColor()
{
  

  if(this.color.controls['white'].value)
       this.admin.insertColor("white",this.id);
  if(this.color.controls['black'].value)
       this.admin.insertColor("black",this.id);
  if(this.color.controls['blue'].value)
       this.admin.insertColor("blue",this.id);
  if(this.color.controls['pink'].value)
       this.admin.insertColor("pink",this.id);
  if(this.color.controls['green'].value)
       this.admin.insertColor("green",this.id);
  if(this.color.controls['red'].value)
       this.admin.insertColor("red",this.id);
  if(this.color.controls['gold'].value)
       this.admin.insertColor("gold",this.id);

}

addSize()
{
console.log(this.size.controls['S'].value);
  if(this.size.controls['S'].value)
       this.admin.insertSize("S",this.id);
  if(this.size.controls['M'].value)
       this.admin.insertSize("M",this.id);
  if(this.size.controls['L'].value)
       this.admin.insertSize("L",this.id);
  if(this.size.controls['XL'].value)
       this.admin.insertSize("XL",this.id);
}


  onItemChange(id : any){
   this.categoryId=parseInt(id);
  }




    submit(){
      // if(this.id != null)
      //     this.admin.UpdateCategory(this.id,this.name.value,this.image.value);
      
     
   debugger
   var body={
     id:this.id,
    name: this.name.value.toString(),
    description: this.description.value,
    priceBeforDiscount: parseFloat( this.priceBeforDiscount.value),
    priceAfterDiscount:parseFloat( this.priceAfterDiscount.value),
    quantity:parseInt(this.quantity.value),
    state:this.state.value,
    categoryId: this.categoryId,
    productSales:this.admin.selectedProductById.productSales

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
  this.http.put('https://localhost:44346/api/Product',body,requestOptions).subscribe((data:any)=>{
    debugger
    console.log(data);
    if(this.id)
    {
      this.admin.deleteColor(this.id);
      this.admin.deleteSize(this.id);

    }
  

      this.addColor();
      this.addSize();
     this.updateImages();

     
    this.spinner.hide();
    this.toast.success('The Item updated successfully');

    window.location.reload();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
   }

   updateImages()
   {
     

    this.admin.updateImages(this.admin.ProductImages[0].id,this.image1.value,this.id ,1 );
    this.admin.updateImages(this.admin.ProductImages[1].id,this.image2.value,this.id ,0);
    this.admin.updateImages(this.admin.ProductImages[2].id,this.image3.value,this.id ,0);
    this.admin.updateImages(this.admin.ProductImages[3].id,this.image4.value,this.id ,0);

   }
}

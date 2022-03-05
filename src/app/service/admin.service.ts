import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Product {
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

export interface Reviews{
  id :number;
  userId :number;
  productId :number;
  rate :number;
  reviewText :string;
  accept :number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  allCategories : any =[{}];
  

  constructor(private http:HttpClient, private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService) { }


  getReviews():Observable<Reviews[]>{

    return this.http.get<Reviews[]>('https://localhost:44346/api/Reviews/SelectAllReviews');
  }
  SoldOut():Observable<Product[]>{

    return this.http.get<Product[]>('https://localhost:44346/api/Product/SoldOut');
  }

  getAllCategories()
  {
    this.spinner.show();
    debugger
    this.http.get('https://localhost:44346/api/Category/SelectAllCategory').subscribe((data:any)=>{
      debugger
      this.allCategories=data;
      console.log(this.allCategories);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }

  selectedCategory:any=[{}];
getCategoryById(id : any)
{
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44346/api/Category/SelectCategoryByID/'+id).subscribe((data:any)=>{
    debugger
    this.selectedCategory=data;
    console.log(this.selectedCategory);
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
}
  insertCategory(name:string,image:string)
  {
 
    var body={
      name: name.toString() ,
      image: image.toString()
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
    this.http.post('https://localhost:44346/api/Category/InsertCategory',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('The Item added successfully');

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }

  UpdateCategory(id:number,name:string,image:string)
  {
 
    var body={
      id:id,
      name: name.toString() ,
      image: image.toString()
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
    this.http.put('https://localhost:44346/api/Category',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('The Item updated successfully');
     // window.location.reload();
    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }

  deleteCategory(id:number){

    this.spinner.show();
    debugger
    this.http.delete('https://localhost:44346/api/Category/DeleteCategory/'+id).subscribe((res:any)=>{
      debugger
     console.log(res);
  this.toast.success("The Item deleted successfully");
      debugger
      this.spinner.hide();
  
  
    },err=>{
  
      this.spinner.hide();
  
     this.toast.error(err.status);
  
    })
  
  }
  Getbyname(name:string){
    return this.http.get('https://localhost:44346/api/Product/Search/'+name);
  
  }
  allProducts : any =[{}];
  getAllProduct(){
    this.spinner.show();
    debugger
     this.http.get('https://localhost:44346/api/Product/SelectprodctDetails').subscribe((data:any)=>{
      debugger
      this.allProducts=data;
      console.log(this.allProducts);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }
 

  selectedProduct : any =[{}];
  getProductByName(name :any){
   
    debugger
     this.http.get('https://localhost:44346/api/Product/SelectProductByName/'+name).subscribe((data:any)=>{
      debugger
      this.selectedProduct=data;
      console.log(this.selectedProduct);
      

    },err=>{
      
      this.toast.error(err.status);
    })
  }


  insertColor(name:any,productId:any)
  {
    var body={
      name: name.toString() ,
      productId: parseInt(productId) 
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
    this.http.post('https://localhost:44346/api/Color/InsertColor',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('The Item added successfully');

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }

  insertSize(name:any,productId:any)
  {
    var body={
      name: name.toString() ,
      productId: parseInt(productId) 
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
    this.http.post('https://localhost:44346/api/Size/InsertSize',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('The Item added successfully');

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }



  insertImages(image: any , id:any,n:any)
          {

            console.log("service = ",image);
            var body={
              imageName: image.toString() ,
              productId: parseInt(id) ,
              firstImage: parseInt(n)
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
            this.http.post('https://localhost:44346/api/ProductImage/InsertProductImage',body,requestOptions).subscribe((data:any)=>{
              debugger
              console.log(data);
              this.spinner.hide();
              this.toast.success('The Item added successfully');
        
            },err=>{
              this.spinner.hide();
              this.toast.error(err.status);
            })
           
          }
          updateImages(id:any,image: any , Pid:any,n:any)
          {

            console.log("service = ",image);
            var body={
              id:parseInt(id),
              imageName: image.toString() ,
              productId: parseInt(Pid) ,
              firstImage: parseInt(n)
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
            this.http.put('https://localhost:44346/api/ProductImage',body,requestOptions).subscribe((data:any)=>{
              debugger
              console.log(data);
              this.spinner.hide();
              this.toast.success('The Item updated successfully');
        
            },err=>{
              this.spinner.hide();
              this.toast.error(err.status);
            })
           
          }
          firstImage: any =[{}];
getFirstImage(id:any)
 {
  debugger
  this.http.get('https://localhost:44346/api/ProductImage/getFirstImage/'+id).subscribe((data:any)=>{
   debugger
   this.firstImage=data;
   console.log(this.firstImage);
   

 })
  }

  ProductImages: any =[{}];
  SelectProductImageByID(id:any)
 {
  debugger
  this.http.get('https://localhost:44346/api/ProductImage/SelectProductImageByID/'+id).subscribe((data:any)=>{
   debugger
   this.ProductImages=data;
   console.log(this.ProductImages);
   

 },err=>{
   
   this.toast.error(err.status);
 })
  }


  
  selectedProductById:any=[{}];
  getProductById(id : any)
{
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44346/api/Product/SelectProductByID/'+id).subscribe((data:any)=>{
    debugger
    this.selectedProductById=data;
    console.log(this.selectedProductById);
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
}


deleteColor(id:number){

  this.spinner.show();
  debugger
  this.http.delete('https://localhost:44346/api/Color/DeleteColor/'+id).subscribe((res:any)=>{
    debugger
   console.log(res);
this.toast.success("The Item deleted successfully");
    debugger
    this.spinner.hide();


  },err=>{

    this.spinner.hide();

   this.toast.error(err.status);

  })

}

deleteSize(id:number){

  this.spinner.show();
  debugger
  this.http.delete('https://localhost:44346/api/Size/DeleteSize/'+id).subscribe((res:any)=>{
    debugger
   console.log(res);
this.toast.success("The Item deleted successfully");
    debugger
    this.spinner.hide();


  },err=>{

    this.spinner.hide();

   this.toast.error(err.status);

  })

}

deleteImage(id:number){

  this.spinner.show();
  debugger
  this.http.delete('https://localhost:44346/api/ProductImage/DeleteProductImage/'+id).subscribe((res:any)=>{
    debugger
   console.log(res);
this.toast.success("The Item deleted successfully");
    debugger
    this.spinner.hide();


  },err=>{

    this.spinner.hide();

   this.toast.error(err.status);

  })

}

deleteProduct(id:number){

  this.spinner.show();
  debugger
  this.http.delete('https://localhost:44346/api/Product/DeleteProduct/'+id).subscribe((res:any)=>{
    debugger
   console.log(res);
this.toast.success("The Item deleted successfully");
    debugger
    this.spinner.hide();


  },err=>{

    this.spinner.hide();

   this.toast.error(err.status);

  })

}

Departments:any=[{}];
AllDepartments()
{
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44346/api/Department/SelectAllDepartment').subscribe((data:any)=>{
    debugger
    this.Departments=data;
    console.log(this.Departments);
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
}



selectedEmployee:any=[{}];
GetemployeesInformation()
{
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44346/api/Users/GetemployeesInformation').subscribe((data:any)=>{
    debugger
    this.selectedEmployee=data;
    console.log(this.selectedEmployee);
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
}






deleteEmployee(id:number){

  this.spinner.show();
  debugger
  this.http.delete('https://localhost:44346/api/Users/DeleteUser/'+id).subscribe((res:any)=>{
    debugger
   console.log(res);
this.toast.success("The Employee deleted successfully");
    debugger
    this.spinner.hide();


  },err=>{

    this.spinner.hide();

   this.toast.error(err.status);

  })

}
userInfo:any=[{}];
  getuserById(id : number)
  {
    this.spinner.show();
debugger
    this.http.get('https://localhost:44346/api/Users/SelectUserByID/'+id).subscribe((data:any)=>{
      debugger
      this.userInfo=data;
      console.log(this.userInfo);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }
}

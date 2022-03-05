import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  allProduct : any =[{}]
  selectedProduct:any=[{}];
  ProductColor:any=[{}];
  ProductSize:any=[{}];
  data :any =[{}]
  user:any=[{}];
  carProduct:any=[{}];
  productID:any=[];
  myOrder:any=[{}];
  moneyAmount:number|undefined;
  count:number|undefined;
  total:number|undefined;
  moneyAfter:number=0;
  UserId:number=0;
  CardID:number|undefined;
  ProductProfile:number=0;
  SearchResult:any=[{}];

  constructor(private http:HttpClient, private router: Router, private spinner:NgxSpinnerService,private toast:ToastrService) { }

  userInfo:any=[{}];
  getuserById()
  {
    this.spinner.show();
    
    const id=localStorage.getItem('userId');

    this.http.get('https://localhost:44346/api/Users/SelectUserByID/'+id).subscribe((data:any)=>{
      
      this.userInfo=data;
      console.log(this.userInfo);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
    })
  }

  deletefromCart(id:number){

    this.spinner.show();
  
    debugger
  
    this.http.delete('https://localhost:44346/api/CustomerProduct/DeleteCustomerProduct/'+id).subscribe((res:any)=>{
  
      debugger
  
     console.log(res);
  
      debugger
  
      // window.location.reload();
      if(localStorage.getItem('userId')){
  
        let id=parseInt(localStorage.getItem('userId')||'{}');
        this.getCart(id)
  
      }
  
      this.spinner.hide();
  
  
    },err=>{
  
      this.spinner.hide();
  
      console.log(err.status);
  
    })
  
  }

  makeCartEmpty(id:number){

    this.spinner.show();
  
    debugger
  
    this.http.delete('https://localhost:44346/api/CustomerProduct/DeleteByUserID/'+id).subscribe((res:any)=>{
  
      debugger
  
     console.log(res);
  
      debugger
  
      this.spinner.hide();
  
  
    },err=>{
  
      this.spinner.hide();
  
      console.log(err.status);
  
    })
  
  }

  
  getAllProduct(){
  
    return this.http.get('https://localhost:44346/api/Product/SelectAllProduct');
  }
  getProductById(id:number)
  {
    this.spinner.show();
    localStorage.setItem('ProductId',id.toString());
    this.http.get('https://localhost:44346/api/Product/SelectProductByID/'+id).subscribe((data:any)=>{
      
      this.selectedProduct=data;
      //console.log(this.selectedProduct);
      this.data=this.selectedProduct;
      
      this.selectProductColor(id);
      this. SelectSizeByID(id);
      this.selectProductReviews(id);

      this.router.navigate(['ProductDetails']);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
      this.router.navigate(['Home']);
    })
  }
  SelectSizeByID(id:number)
  {
   
    this.http.get('https://localhost:44346/api/Size/SelectSizeByID/'+id).subscribe((data:any)=>{
      
      this.ProductSize=data;
     // console.log(this.ProductSize);

    },err=>{
      this.toast.error(err.status);
    })
  }
  selectProductColor(id:number)
  {
 
    this.http.get('https://localhost:44346/api/Color/selectProductColor/'+id).subscribe((data:any)=>{
      
      this.ProductColor=data;
     // console.log(this.ProductColor);

    },err=>{
      this.toast.error(err.status);
    })
  }
  ProductReviews:any=[{}];
  selectProductReviews(id:number)
  {
 debugger
    this.http.get('https://localhost:44346/api/Reviews/SelectReviewsById/'+id).subscribe((data:any)=>{
      debugger
      this.ProductReviews=data;
     console.log(this.ProductReviews);
    //  this.SelectuserByID(data.userId);
    },err=>{
      this.toast.error(err.status);
    })
  }

  SelectuserByID(id : number)
  {
   
    this.http.get('https://localhost:44346/api/Users/SelectUserByID/'+id).subscribe((data:any)=>{
      debugger
      this.user=data;
      console.log(this.user);

    },err=>{
      this.toast.error(err.status);
    })
  }
  SalesInfo:any=[{}];
getSalesInfo(id : number,q:number)
{
this.http.get('https://localhost:44346/api/Product/getSalesInfo/'+id).subscribe((data:any)=>{
debugger
this.SalesInfo=data;
console.log(this.SalesInfo);



if(this.SalesInfo.quantity-q <=0)



this.setSalesInfo(id,this.SalesInfo.quantity-q,this.SalesInfo.productSales+q,0);
else this.setSalesInfo(id,this.SalesInfo.quantity-q,this.SalesInfo.productSales+q,1);




},err=>{
this.toast.error(err.status);
})
}
setSalesInfo(id:number,Quantity:number,sales:number , flag :any)
{
var state ;
if(flag)
state="Available";
else state="solde out";



// console.log(this.selectProductColor);
var body={
id:id ,
quantity:Quantity,
productSales:sales,
state: state
};
const headerDct={
'Content-Type':'application/json',
'Accept':'application/json'
}
const requestOptions={
headers:new HttpHeaders(headerDct)
}

debugger
this.http.post('https://localhost:44346/api/Product/setSalesInfo',body,requestOptions).subscribe((data:any)=>{
debugger
console.log(data);
},err=>{
this.toast.error(err.status);
})
}
  addtoCustomerProduct(id:number,Quantity:number)
  {
 // console.log(this.selectProductColor);
    var body={
      userId:parseInt(localStorage.getItem('userId') || '{}') ,
      productId:id,
      quantity:Quantity,
      price:this.selectedProduct.priceAfterDiscount,
      color:localStorage.getItem('color'),
      size:localStorage.getItem('size') ,

     
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

    getProductByName(name:string){
    this.spinner.show();
    debugger
    this.http.get('https://localhost:44346/api/Product/SelectProductByName/'+name).subscribe((data:any)=>{
      
      this.selectedProduct=data;
     // console.log(this.selectedProduct);
     // this.data=this.selectedProduct;
      this.router.navigate(['ProductDetails']);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);
      this.router.navigate(['Home']);
    })
  }
///////////////////////////////////////////////////////////////////////


  addtoCart(id:number)

  {

    this.spinner.show();

    debugger

    this.http.get('https://localhost:44346/api/Product/SelectProductByID/'+id).subscribe((data:any)=>{

     

      this.selectedProduct=data;

      console.log(this.selectedProduct);

      this.data=this.selectedProduct;

      this.router.navigate(['ProductDetails']);

      this.spinner.hide();



    },err=>{

      this.spinner.hide();

      this.toast.error(err.status);

      this.router.navigate(['Home']);

    })

  }

  getCart(id:number){

    this.spinner.show();

    debugger

    this.http.get('https://localhost:44346/api/CustomerProduct/SelectCartItems/'+id).subscribe((data:any)=>{

      debugger

      this.carProduct=data;

      this.data=this.carProduct;

      debugger

      this.getAllID();

      this.router.navigate(['cart']);

      this.spinner.hide();



    },err=>{

      this.spinner.hide();

      this.toast.error(err.status);

      this.router.navigate(['Home']);

    })

  }

  CheckOut(id:number){

    this.spinner.show();

    debugger

    this.http.get('https://localhost:44346/api/CustomerProduct/SelectCartItems/'+id).subscribe((data:any)=>{

      debugger

      this.myOrder=data;

      this.data=this.myOrder;

      debugger

      this.count=this.myOrder.length;

       

      for (let index = 0; index < this.myOrder.length; index++) {

       this.productID[index]=this.myOrder[index].productId;            
       debugger
       this.getSalesInfo(this.myOrder[index].productId,this.myOrder[index].quantity);
       debugger

      }

      this.router.navigate(['checkout']);

      this.spinner.hide();



    },err=>{

      this.spinner.hide();

      this.toast.error(err.status);

      this.router.navigate(['Home']);

    })

  }

  getAllID(){

    this.count=this.carProduct.length;

       

           for (let index = 0; index < this.carProduct.length; index++) {

            this.productID[index]=this.carProduct[index].productId;            

           

           }

  }

  createUser(name:any,phoneNumber:any,email:any,address:any){

    var body={

      name:name.value.toString(),

      phoneNumber:phoneNumber.value.toString(),

      email:email.value.toString(),

      address:address.value.toString(),

      birthDate:"1995-02-20T00:00:00",

      imageName:"path",

      salary:0,

      profit:0,

      losses:0,

      departmentId:5

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

      return this.http.post('https://localhost:44346/api/Users/InsertUser',body,requestOptions).subscribe((res:any)=>{

        debugger  

        console.log(res);

      this.spinner.hide();

        this.toast.success('Thank you. Your order has been received.')

        this.router.navigate(['shop']);

       },err=>{

         console.log(err);

        //  console.clear();

      this.spinner.hide();

      this.toast.error("something wrong")

     

      })

 

    }


    getMoney(id:number){

      this.http.get('https://localhost:44346/api/CreditCard/GetMoneyAmount/'+id).subscribe((data:any)=>{

        this.moneyAmount=data;

        debugger

        console.log(this.moneyAmount);

        debugger

        if(this.moneyAmount && this.total)

        this.moneyAfter=this.moneyAmount-this.total;

        debugger

        if(localStorage.getItem('userId')){

          this.UserId=parseInt(localStorage.getItem('userId')||'{}');

          this.Buy(this.UserId,this.moneyAfter);

        }

      },err=>{

          console.log(err);

      })

    }


    Buy(id:number,moneyInCard:number){

      var body={

        id:id,

        moneyInCard:moneyInCard,

      };

      const headerDct={

        'Content-Type':'application/json',

        'Accept':'application/json'

      }

      const requestOptions={

        headers:new HttpHeaders(headerDct)

      }

      debugger

      debugger

        return this.http.put('https://localhost:44346/api/CreditCard/Buy',body,requestOptions).subscribe((res:any)=>{

          debugger  

          console.log(res);

         },err=>{

           console.log(err);

       

        })

    }


    getTotal(num:number){

      debugger
    
    this.total=num;
    
    debugger
    
    }
/////////////////////////////////////////////////////////////////////////////////////////

GetCreditCardID(id:number){
  debugger
  this.http.get('https://localhost:44346/api/CreditCard/GetCreditCardID/'+id).subscribe((res:any)=>{
  this.CardID=res;
  debugger
  console.log(this.CardID);
  debugger
  if(this.total)
  this.AddToCheckOut(this.total);
  
  })

}


AddToCheckOut(totalPrice:number){
  let toady = new Date();
  console.log(toady.getUTCDate())
var todayDate = new Date(toady.getFullYear(), toady.getMonth(), toady.getDate());
debugger
var body={

date:todayDate,
creditId:this.CardID,
totalPrice:totalPrice,
delivered: 0,
deliveredDate: "1999-01-03T00:00:00"

};

const headerDct={

'Content-Type':'application/json',

'Accept':'application/json'

}

const requestOptions={

headers:new HttpHeaders(headerDct)

}

debugger

debugger

return this.http.post('https://localhost:44346/api/CheckOut/InsertCheckOut',body,requestOptions).subscribe((res:any)=>{

  debugger  

  console.log(res);

 },err=>{

   console.log(err);



})

}

UpdateUserInfo(id:any,name:any,phoneNumber:any,email:any,address:any){

  var body={
    id:id,
    name:name.value.toString(),

    phoneNumber:phoneNumber.value.toString(),

    email:email.value.toString(),

    address:address.value.toString(),

    birthDate:"1995-02-20T00:00:00",

    imageName:"path",

    salary:0,

    profit:0,

    losses:0,

    departmentId:5

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

    return this.http.put('https://localhost:44346/api/Users/UpdateUserInfo',body,requestOptions).subscribe((res:any)=>{

      debugger  

      console.log(res);

    this.spinner.hide();

    this.toast.success('Thank you. Your order has been received.')

      this.router.navigate(['shop']);

     },err=>{

       console.log(err);


    this.spinner.hide();


   

    })

}


// ///////////////////////////////////////////


addcreditCard(cardNumber:any,expDate:any)
{
  var body={
    creditCadrNumber:parseInt(cardNumber),
    expiredDate:expDate.toString(),
    moneyInCard:10000,
    userId:parseInt(localStorage.getItem('userId') || '{}') 

   
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
  this.http.post('https://localhost:44346/api/CreditCard/InsertCreditCard',body,requestOptions).subscribe((data:any)=>{
    debugger

    console.log(data);
    
    this.spinner.hide();
    this.toast.success('Credit-Card has been added successfully');

  },err=>{
    this.spinner.hide();
    this.toast.error(err.status);
  })
}


////////////////////////////////////////////////////////

}

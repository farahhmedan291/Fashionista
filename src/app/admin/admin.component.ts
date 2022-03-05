import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { Component, ElementRef, ViewChild } from '@angular/core';


declare var require: any;
import * as XLSX from 'xlsx';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {
  AccountantService,
  clientInfo,
  empInfo,
  ordersInfo,
  productInfo,
} from '../service/accountant.service';
import {  NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AdminService ,
  Reviews,
  Product
} from '../service/admin.service';


const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
  '../../assets/css/style.css',
  '../../assets/css/bootstrap.min.css',
'../../assets/css/animate.min.css',
'../../assets/css/flaticon.css',
'../../assets/css/slicknav.css',
'../../assets/css/magnific-popup.css',
'../../assets/css/fontawesome-all.min.css',
'../../assets/css/themify-icons.css',
'../../assets/css/slick.css',
'../../assets/css/nice-select.css']
})
export class AdminComponent implements OnInit {


  
  

  startDate = new FormControl('',Validators.required);
  endDate = new FormControl('', Validators.required);
  startDate1 = new FormControl('',Validators.required);
  endDate1 = new FormControl('', Validators.required);
  data: clientInfo[] = [];
  data1: empInfo[] = [];
  data2: productInfo[] = [];
  data3: Product[] = [];
  data4: Reviews[] = [];
  orderData:ordersInfo[]=[];
  total:number|undefined;  
  allPrice=[];
  TotalPrices:number=0;
  TotalSalaries:number=0;
  ShowTotalPrices:number=0;
  netIncome:number=0;
  status:string=" ";
  columnsToDisplay = ['name', 'phoneNumber', 'email'];
  columnsToDisplay1 = ['name', 'salary', 'profit', 'losses', 'netSalary'];
  columnsToDisplay2 = [
    'name',
    'priceBeforDiscount',
    'quantity',
    'productSales',
    'totalEarnings',
  ];
  columnsToDisplay3 = ['id','date','totalPrice'];
  columnsToDisplay4 = ['id','name','quantity','state','actions'];
  columnsToDisplay5 = ['id','userId','productId','reviewText','actions','delete'];
  fileName = 'ExcelSheet.xlsx';
  totalOfNetSalary:number=0;
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  @ViewChild('pdfTable1')
  pdfTable1!: ElementRef;
  @ViewChild('pdfTable2')
  pdfTable2!: ElementRef;
  @ViewChild('pdfTable3')
  pdfTable3!: ElementRef;
  @ViewChild('pdfTable4')
  pdfTable4!: ElementRef;
  public clientDownloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
  }
  clientExportexcel(): void {
    /* table id is passed over here */

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  public epmloyeeDownloadAsPDF() {
    const pdfTable1 = this.pdfTable1.nativeElement;
    var html1 = htmlToPdfmake(pdfTable1.innerHTML);
    const documentDefinition1 = { content: html1 };
    pdfMake.createPdf(documentDefinition1).download();
  }
  epmloyeeExportexcel(): void {
    /* table id is passed over here */

    let element1 = document.getElementById('excel-table1');
    const ws1: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element1);

    /* generate workbook and add the worksheet */
    const wb1: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb1, ws1, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb1, this.fileName);
  }

  public productDownloadAsPDF() {
    const pdfTable2 = this.pdfTable2.nativeElement;
    var html2 = htmlToPdfmake(pdfTable2.innerHTML);
    const documentDefinition1 = { content: html2 };
    pdfMake.createPdf(documentDefinition1).download();
  }

  public orderDownloadAsPDF() {
    const pdfTable3 = this.pdfTable3.nativeElement;
    var html3 = htmlToPdfmake(pdfTable3.innerHTML);
    const documentDefinition1 = { content: html3 };
    pdfMake.createPdf(documentDefinition1).download();
  }
  orderExportexcel(): void {
    let element3 = document.getElementById('excel-table3');
    const ws3: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element3);

    /* generate workbook and add the worksheet */
    const wb3: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb3, ws3, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb3, this.fileName);
  }

  productExportexcel(): void {
    /* table id is passed over here */

    let element2 = document.getElementById('excel-table2');
    const ws2: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element2);

    /* generate workbook and add the worksheet */
    const wb2: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb2, ws2, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb2, this.fileName);
  }
  public generalDownloadAsPDF() {
    const pdfTable4 = this.pdfTable4.nativeElement;
    var html4 = htmlToPdfmake(pdfTable4.innerHTML);
    const documentDefinition1 = { content: html4 };
    pdfMake.createPdf(documentDefinition1).download();
  }

  constructor(public admin:AdminService,
    public acc: AccountantService,
    private spinner: NgxSpinnerService,
    private http:HttpClient,
    private toast:ToastrService
  ) {
    this.acc.GetClientsInformation().subscribe((x) => {
      this.spinner.show();
      this.data = x;
      this.spinner.hide();
    });

    this.acc.GetemployeesInformation().subscribe((x) => {
      this.spinner.show();
      this.data1 = x;
      this.data1.forEach(element => {
        this.totalOfNetSalary+=element.salary+element.profit-element.losses;
      });
      this.spinner.hide();
    });
    this.acc.GetProductsInformation().subscribe((x) => {
      this.spinner.show();
      this.data2 = x;
      this.spinner.hide();
    });
    this.acc.GetAllOrders().subscribe((x) => {
      this.spinner.show();
      this.orderData = x;
      this.spinner.hide();
    });

    this.admin.SoldOut().subscribe((x) => {
      this.spinner.show();
      this.data3 = x;
      this.spinner.hide();
    });
    this.admin.getReviews().subscribe((x) => {
      this.spinner.show();
      this.data4 = x;
      this.spinner.hide();
    });
  }

  ngOnInit(): void {

    this.admin.getAllCategories();
    this.admin.getAllProduct();
    this.admin.GetemployeesInformation();
    this.admin.AllDepartments();
    
  }

  
  Search(){
    let start=this.startDate.value;
    let end=this.endDate.value;
    var body={
      startDate:start.toString(),
      endDate:end.toString(),
  
    };
    const headerDct={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDct)
    } 
    debugger
      return this.http.post('https://localhost:44346/api/CheckOut/SelectOrdersByDate',body,requestOptions).subscribe((res:any)=>{
        this.orderData=res;


        })
  }

  getTotalPrice() {
    return this.orderData.map(t => t.totalPrice).reduce((acc, value) => acc + value, 0);
  }
    getTotalSalary() {
    this.total=this.data1.map(t => t.salary).reduce((acc, value) => acc + value, 0);
    return(this.total);
  }
  GetReport(){
    let start1=this.startDate1.value;
    let end1=this.endDate1.value;
    var date1 = new Date(start1); 
    var date2 = new Date(end1); 
    let time=(date2.getTime()-date1.getTime());
    let months = Math.floor((time / (1000 * 3600 * 24))/28);
    var body={
      startDate:start1.toString(),
      endDate:end1.toString(),
  
    };
    const headerDct={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDct)
    } 
    debugger
      return this.http.post('https://localhost:44346/api/CheckOut/SelectOrdersByDate',body,requestOptions).subscribe((res:any)=>{
      debugger 
      res.forEach((element:any) => {
          this.TotalPrices+=parseInt(element.totalPrice);
        });
        debugger
        this.ShowTotalPrices=this.TotalPrices;
        this.TotalPrices=0;
        if(months>=1){
        this.TotalSalaries=this.getTotalSalary()*months}
        else{
          this.TotalSalaries=this.getTotalSalary()
        }
        this.netIncome=this.ShowTotalPrices-this.TotalSalaries;
        if(this.netIncome>0){
          this.status="Earnings: "+this.netIncome+" JD";
        }
        else{
          
          this.status="Losses: "+(-1*this.netIncome)+" JD";

        }
        let toady = new Date();
        var todayDate = new Date(toady.getFullYear(), toady.getMonth(), toady.getDate());
        // (YYYY, MM, DD) 
        let date2 = new Date(end1); 
        var end = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        let date1 = new Date(start1); 
        var start = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        if(end.getTime()>todayDate.getTime() ||start.getTime()>todayDate.getTime()){
          this.toast.warning("the filtering result contain future date we can't detect net income accurately")
        }
          console.log(this.ShowTotalPrices);
          console.log(this.TotalPrices);
          console.log(months);
              
        
        })

 
  }
 


 
  Quantity(id : any)
  {
    var body={
      id: id ,
      num: 10
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
    this.http.put('https://localhost:44346/api/Product/addQuantity',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('data updated successfully');
    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);

    })
  }
  

  addReview(id : number)
  {
    var body={
      id: id ,
      accept: 1
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
    this.http.put('https://localhost:44346/api/Reviews',body,requestOptions).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.spinner.hide();
      this.toast.success('data updated successfully');
    },err=>{
      this.spinner.hide();
      this.toast.error(err.status);

    })
  }
  
  DeleteReview(id : number)
  {

    this.spinner.show();
    debugger
    this.http.delete('https://localhost:44346/api/Reviews/DeleteReviews/'+id).subscribe((res:any)=>{
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
}

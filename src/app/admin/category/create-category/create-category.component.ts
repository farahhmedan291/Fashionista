import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  name = new FormControl('');
  image = new FormControl('');

  constructor(private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService) { }

  ngOnInit(): void {
  }
  
  submit(){
   this.admin.insertCategory(this.name.value,this.image.value);
   window.location.reload();
  }
  selectedFile:any;
  

  uploadFile(event:any) {
    debugger
   
   var file=event.target.files[0];
   const formData:FormData=new FormData();
   formData.append('file',file,file.name);
   
   debugger
   this.http.post('https://localhost:44346/api/Category/saveFile',formData)
   .subscribe((data:any)=>{
    debugger
    this.image.setValue ('../../../../assets/img/category/'+data);
   
     debugger
   })
   
    }
    
}

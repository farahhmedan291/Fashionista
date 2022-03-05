import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css',
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
export class EditCategoryComponent implements OnInit {

  
    constructor(private http:HttpClient,public admin:AdminService, private spinner:NgxSpinnerService,private toast:ToastrService) { }

    id :number | undefined;
    name = new FormControl('');
    image = new  FormControl('');

    ngOnInit(): void {
      if(localStorage.getItem('CategoryId') != null){
           this.id=parseInt(localStorage.getItem('CategoryId') || '{}' );
           this.admin.getCategoryById( this.id);
      } 
    }
   
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

      submit(){
        if(this.id != null)
            this.admin.UpdateCategory(this.id,this.name.value,this.image.value);
        
       }
}

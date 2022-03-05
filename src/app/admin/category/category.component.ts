import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css',
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
export class CategoryComponent implements OnInit {

  @Input() id :number | undefined;

  @Input() name:string="N/A";
  @Input() image:string="N/A";
  
  constructor(public admin:AdminService, private router: Router) { }

  ngOnInit(): void {
    
  }
  openEdit(){
    if(this.id !=null)
        localStorage.setItem('CategoryId',this.id.toString());
    this.router.navigate(['editCategory']);
  }
 
  delete()
  {
    if(this.id !=null)
        this.admin.deleteCategory(this.id);

    window.location.reload();
  }
 
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css',
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
export class ProductComponent implements OnInit {
 

  @Input() id :number | undefined;

  @Input() name:string="N/A"

  @Input() priceBeforDiscount:number|undefined

  @Input() priceAfterDiscount:number|undefined

  @Input() state:string|undefined

  @Input() imageName:string|undefined

  
  constructor(public admin:AdminService, private router: Router) { }

  ngOnInit(): void {

    this.admin.getFirstImage(this.id);
  }

  openEdit(){
    if(this.id !=null)
        localStorage.setItem('ProductId',this.id.toString());
    this.router.navigate(['editProduct']);
  }
 
  
  delete()
  {
    if(this.id !=null)
    {
      this.admin.deleteSize(this.id);
      this.admin.deleteColor(this.id);
      this.admin.deleteImage(this.id);
      this.admin.deleteProduct(this.id);
    }
        

    window.location.reload();
  }
}

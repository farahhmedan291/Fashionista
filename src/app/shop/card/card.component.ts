import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css',
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
export class CardComponent implements OnInit {

  constructor(private router:Router,public home:HomeService,private toastr:ToastrService) { }

  @Input() id :number | undefined;

  @Input() name:string="N/A"

  @Input() priceBeforDiscount:number|undefined

  @Input() priceAfterDiscount:number|undefined

  @Input() state:string|undefined

  @Input() imageName:string|undefined

  ngOnInit(): void {
  }
  showProfile(){
    if(this.id)
   // if(this.name)
    {
      //this.toastr.success('you are welcome ')
      debugger;
      //console.log(this.home.selectedProduct);

      this.home.getProductById(this.id);

     // this.home.getProductByName(this.name);
    }
    else{
      this.toastr.warning('This item cannot be loded!!')
    }
  }

  
}

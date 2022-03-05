import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
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
    {
      debugger;
      console.log(this.home.selectedProduct);
     // this.home.ProductProfile=this.id;
      this.home.getProductById(this.id);

    }
    else{
      this.toastr.warning('This item cannot be loded!!')
    }
  }


}

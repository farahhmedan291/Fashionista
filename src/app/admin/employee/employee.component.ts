import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css',
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
export class EmployeeComponent implements OnInit {

  @Input() id :number | undefined;

  @Input() name:string="N/A"

  @Input() phoneNumber:string|undefined

  @Input() email:string|undefined

  @Input() address:string|undefined

  @Input() birthDate:string|undefined

  @Input() imageName:string|undefined

  @Input() salary:number|undefined

  @Input() profit:number|undefined
  @Input() losses:number|undefined

  @Input() departmentId:number|undefined

  constructor(public admin:AdminService, private router: Router) { }

  ngOnInit(): void {
   // this.admin.GetemployeesInformation();
  }


  openEdit(){
    if(this.id !=null)
        localStorage.setItem('EmployeeId',this.id.toString());
    this.router.navigate(['editEmployee']);
  }
 
  
  delete()
  {
    if(this.id !=null)
    {
      this.admin.deleteEmployee(this.id);
      
    }
    window.location.reload();
  }
}

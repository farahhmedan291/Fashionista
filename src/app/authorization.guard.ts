import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private toast:ToastrService,private router: Router) { }

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger
      const token=localStorage.getItem('token');
      debugger
    if(token){
      //كلمة ادمن موجودة بالرابط ؟؟ 
      debugger
      if(state.url.indexOf('admin')>=0){
        //اذا مسجل دخول يعني 
        debugger
        let user:any=localStorage.getItem('user');
        if(user){
          // user.json.parse(user);
          //if user is admin
          if(user.indexOf('admin')>=0)
          {return true;}
          else{
            this.toast.warning('this page for Admin');
            this.router.navigate(['Home'])
            return false;
          }
        }
        //هون بنحط else if  وبنحك ال role الباقيين
        else{
          this.toast.warning('this page for Admin')
          return false;
        }

      }
       else if(state.url.indexOf('delivery')>=0){
        //اذا مسجل دخول يعني 
        debugger
        let user:any=localStorage.getItem('user');
        if(user){
          // user.json.parse(user);
          //if user is admin
          if(user.indexOf('Delivery')>=0)
          {return true;}
          else{
            this.toast.warning('this page for delivery');
            this.router.navigate(['Home'])
            return false;
          }
        }
        //هون بنحط else if  وبنحك ال role الباقيين
        else {
          this.toast.warning('this page for delivery')
          return false;
        }

      }
      else if(state.url.indexOf('accountant')>=0){
        //اذا مسجل دخول يعني 
        debugger
        let user:any=localStorage.getItem('user');
        if(user){
          // user.json.parse(user);
          //if user is admin
          if(user.indexOf('Accountant')>=0)
          {return true;}
          else{
            this.toast.warning('this page for accountant');
            this.router.navigate(['Home'])
            return false;
          }
        }
        //هون بنحط else if  وبنحك ال role الباقيين
        else {
          this.toast.warning('this page for accountant')
          return false;
        }

      }
      return true;
    }
    else{
      this.toast.error("you are not Autherized")
      this.router.navigate(['Home']);
      return false;
    }  
  }
  
}

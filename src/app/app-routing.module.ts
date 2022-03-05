import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountantComponent } from './accountant/accountant.component';
import { AdminComponent } from './admin/admin.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { EditEmployeeComponent } from './admin/employee/edit-employee/edit-employee.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ClientModule } from './client/client.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './shop/cart/cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'',
    loadChildren:()=>AuthModule
  },
  {
    path:'client',
    loadChildren:()=>ClientModule
  },
  {
    path:'ProductDetails',
    component:ProductDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthorizationGuard]

  },
  {
    path:'accountant',
    component:AccountantComponent,
    canActivate:[AuthorizationGuard]

  },
  {
    path:'editCategory',
    component:EditCategoryComponent,
    canActivate:[AuthorizationGuard]

  },
  {
    path:'delivery',
    component:DeliveryComponent,
    canActivate:[AuthorizationGuard]

  }
  ,
  {
    path:'editProduct',
    component:EditProductComponent
  },
  {
    path:"editEmployee",
    component:EditEmployeeComponent
  },
  {
 
    path:"Search",
    component:SearchComponent
  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

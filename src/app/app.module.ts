import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shop/card/card.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { RowComponent } from './shop/cart/row/row.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { SizeGuideComponent } from './shop/product-details/size-guide/size-guide.component';
import { ColorComponent } from './shop/product-details/color/color.component';
import { SizeComponent } from './shop/product-details/size/size.component';
import { ReviewComponent } from './shop/product-details/review/review.component';
import { BillingDetailsComponent } from './shop/checkout/billing-details/billing-details.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { ProductComponent } from './admin/product/product.component';
import { CreateProductComponent } from './admin/product/create-product/create-product.component';
import { CategryComponent } from './admin/product/create-product/categry/categry.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AccountantComponent } from './accountant/accountant.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { EmployeeComponent } from './admin/employee/employee.component';
import { EditEmployeeComponent } from './admin/employee/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './admin/employee/create-employee/create-employee.component';
import { DepartmentComponent } from './admin/employee/create-employee/department/department.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ShopComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProductDetailsComponent,
    CartComponent,
    RowComponent,
    CheckoutComponent,
    SizeGuideComponent,
    ColorComponent,
    SizeComponent,
    ReviewComponent,
    BillingDetailsComponent,
    AdminComponent,
    CategoryComponent,
    CreateCategoryComponent,
    ProductComponent,
    CreateProductComponent,
    CategryComponent,
    EditCategoryComponent,
    EditProductComponent,
   AccountantComponent,
   DeliveryComponent,
   EmployeeComponent,
   EditEmployeeComponent,
   CreateEmployeeComponent,
   DepartmentComponent,
   SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({  
      apiKey: 'AIzaSyA8q-JPcEuAWkA2o77WdH82OGNdqnFeYzQ',
      
      libraries: ['places']  
    }),  
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
imports: [  
    AgmCoreModule.forRoot({  
      apiKey: 'Paste Your Api Key'  
    }),  
  ], 

*/
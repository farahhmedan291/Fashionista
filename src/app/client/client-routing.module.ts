import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditCardComponent } from './home/profile/credit-card/credit-card.component';
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [{

  path:'home',

  component:HomeComponent

},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:"CreditCard",
  component:CreditCardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

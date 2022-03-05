import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './home/card/card.component';
import { ProfileComponent } from './home/profile/profile.component';
import { CreditCardComponent } from './home/profile/credit-card/credit-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ProfileComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})

export class ClientModule {  }

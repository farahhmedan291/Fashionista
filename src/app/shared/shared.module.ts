import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    NgxSpinnerModule,
    MatGridListModule,
    MatSelectModule,
  
  ],
  
  exports :[
    CommonModule,
    MatDatepickerModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,

    ReactiveFormsModule,
MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,

    ReactiveFormsModule,

    MatCardModule,

    MatButtonModule,

    MatToolbarModule,

    MatIconModule,
    NgxSpinnerModule,
    MatGridListModule,
    MatSelectModule,
    
  ]
})
export class SharedModule { }

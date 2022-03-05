import { Component } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FashionistaAngular';
  constructor(public homeService:HomeService){
    setTimeout(()=>{
      this.title='Updated Angular Project '
    },3000)
  }
}

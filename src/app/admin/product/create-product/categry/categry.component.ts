import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categry',
  templateUrl: './categry.component.html',
  styleUrls: ['./categry.component.css']
})
export class CategryComponent implements OnInit {
  @Input() name:string='N/A';
  @Input() id:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

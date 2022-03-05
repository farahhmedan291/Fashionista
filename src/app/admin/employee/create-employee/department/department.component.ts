import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() name:string='N/A';
  @Input() id:number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

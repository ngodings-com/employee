import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '@models/employee';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailComponent implements OnInit {
  @Input()
  display: boolean = false;
  @Input()
  employee!: Employee;

  @Output() displayChange = new EventEmitter<boolean>();
  
  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit() {
  }
}
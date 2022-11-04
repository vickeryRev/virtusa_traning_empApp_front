import { AppComponent } from './../../app.component';
import { EmployeeService } from './../../../services/employee.service';
import { Employee } from './../../Modles/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps: Employee[] = [];

  constructor(private EmployeeService: EmployeeService, private AppComponent: AppComponent) { }

  getEmps(): void {
    this.EmployeeService.findallEmployees().subscribe(
      data => {
        this.emps = data;
      }
    )
  }

  changeDisp(): void {
    this.AppComponent.isLanded = false;
  }

  ngOnInit(): void {
  }

}

import { EmployeeService } from './../../../services/employee.service';
import { Employee } from './../../Modles/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = "Add Employee"

  emp: Employee = new Employee(0, '', '', '');
  added: string = "";

  constructor(private EmployeeService: EmployeeService) { }

  addEmployee(): void {
    this.EmployeeService.addEmployee(this.emp).subscribe(
      data => this.added = `Added ${data.firstName}`
    )
  }

  ngOnInit(): void {
  }

}

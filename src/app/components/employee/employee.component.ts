import { EmployeeService } from './../../../services/employee.service';
import { Employee } from './../../Modles/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = "Add Employee"

  dep: string = "";
  fn: string = "";
  ln: string = "";
  em: string = "";
  emp: Employee = new Employee(0, '', '', '', '');
  added: any = "";

  constructor(private EmployeeService: EmployeeService, private FormBuilder: FormBuilder) { }
  empForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.emp.firstName, [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),

    lastName: new FormControl(this.emp.lastName, [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),
    department: new FormControl(this.emp.department, [Validators.required]),
    email: new FormControl(this.emp.email, [
      Validators.required,

    ])

  })





  save(data: any): void {
    this.emp.firstName = data.firstName;
  }

  addEmployee(data: any): void {
    this.emp.firstName = data.firstName;
    this.emp.lastName = data.lastName;
    this.emp.department = data.department;
    this.emp.email = data.email;
    this.EmployeeService.addEmployee(this.emp).subscribe(
      data => this.added = `Added ${data.firstName}`
    )
  }





  ngOnInit(): void {


  }

}

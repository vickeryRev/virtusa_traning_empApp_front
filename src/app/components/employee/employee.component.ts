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
  empForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),
    department: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [

    ])
    /*
    dept: new FormControl('')
    */
  })
  emp: Employee = new Employee(0, '', '', '');
  added: string = "";

  constructor(private EmployeeService: EmployeeService, private FormBuilder: FormBuilder) { }

  addEmployee(): void {
    this.EmployeeService.addEmployee(this.emp).subscribe(
      data => this.added = `Added ${data.firstName}`
    )
  }



  test() {
    console.log("worked!");
  }

  ngOnInit(): void {


  }

}

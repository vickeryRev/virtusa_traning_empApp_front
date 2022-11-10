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
  emp: Employee = new Employee(0, '', '', '', '');
  added: any = "";

  constructor(private EmployeeService: EmployeeService, private FormBuilder: FormBuilder) { }
  empForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[A-Za-z]+$`)
    ]),
    department: new FormControl('', [Validators.required]),
    email: new FormControl('', [

    ])

  })

  /*
  changeDept(e: any) {
    this.department?.setValue(e.target.value), {
      onlySelf: true,
    }
  }

  get department(): any {

    return this.empForm.get('department');

  }
  */


  addEmployee(): void {
    this.emp.department = this.dep;
    this.EmployeeService.addEmployee(this.emp).subscribe(
      data => this.added = `Added ${data.firstName}`
    )
  }





  ngOnInit(): void {


  }

}

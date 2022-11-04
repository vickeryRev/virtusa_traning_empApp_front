import { Employee } from './../app/Modles/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeUrl: string = url + `/emp`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  //requests
  //add an employee
  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.employeeUrl}/add`, emp, this.httpOptions).pipe(catchError(this.handleError));
  }

  //find all employees

  findallEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}/all`, this.httpOptions)
  }



  //error handleing
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log("An error has occured: ", httpError.error.message);
    }
    else {
      console.error(
        `backend returned code ${httpError.status}
        body was ${httpError.error}`
      )
    }
    return throwError(() => new Error(`Well that did not work out did it?`));
  }
}

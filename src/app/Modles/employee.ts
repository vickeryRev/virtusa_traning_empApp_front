export class Employee {

    id: number;
    firstName: string;
    lastName: string;
    department: string;
    email: string;
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        department: string,
        email: string,
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
        this.email = email
    }



}
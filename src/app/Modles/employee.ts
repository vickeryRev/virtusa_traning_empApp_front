export class Employee {

    id: number;
    firstName: string;
    lastName: string;
    department: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        department: string
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
    }

}
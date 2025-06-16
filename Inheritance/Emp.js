class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getEmp() {
        console.log("Employee Details: ");
        console.log(`Employee Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
    }
}

class Details extends Employee {
    constructor(id, name, department, salary) {
        super(id, name);
        this.department = department;
        this.salary = salary;
    }
    getDetails() {
        super.getEmp();
        console.log(`Employee Department: ${this.department}`);
        console.log(`Employee Salary: ${this.salary}`);
        console.log(" ");
    }
}

const emp = [new Details('1', 'Daksh', 'Technical', '50000'),
new Details('2', 'Soaib', 'Manager', '45000')
];

emp.forEach(emp => emp.getDetails());

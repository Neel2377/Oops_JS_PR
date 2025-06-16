class Employee {
    constructor(id, name, company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
}

class Details extends Employee {
    constructor(id, name, company, department, salary) {
        super(id, name, company);
        this.department = department;
        this.salary = salary;
    }
}

document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let company = document.getElementById("empComp").value;
    let department = document.getElementById("empDept").value;
    let salary = document.getElementById("empSalary").value;

    let newEmp = new Details(id, name, company, department, salary);

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.push(newEmp);

    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee added successfully!");

    document.getElementById("employeeForm").reset();
});

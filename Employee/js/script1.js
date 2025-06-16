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

    static renderTable() {
        let tbody = document.querySelector("#employeeTable tbody");
        tbody.innerHTML = "";

        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        employees.forEach((emp, index) => {
            let row = `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.company}</td>
                    <td>${emp.department}</td>
                    <td>₹${emp.salary}</td>
                    <td>
                        <button class="btn btn-warning btn-sm border border-1 border-black" onclick="Details.editEmployee(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm border border-1 border-black" onclick="Details.deleteEmployee(${index})">Delete</button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    static deleteEmployee(index) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        Details.renderTable();
    }

    static editEmployee(index) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        let emp = employees[index];

        let newName = prompt("Edit Name:", emp.name);
        let newCompany = prompt("Edit Company:", emp.company);
        let newDept = prompt("Edit Department:", emp.department);
        let newSalary = prompt("Edit Salary:", emp.salary);

        if (newName && newCompany && newDept && newSalary) {
            employees[index] = new Details(emp.id, newName, newCompany, newDept, newSalary);
            localStorage.setItem("employees", JSON.stringify(employees));
            Details.renderTable();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Details.renderTable();
});
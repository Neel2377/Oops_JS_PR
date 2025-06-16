class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getStud() {
        console.log("Student Details: ");
        console.log(`Student Id: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
    }
}

class Details extends Student {
    constructor(id, name, rollno, subject) {
        super(id, name);
        this.rollno = rollno;
        this.subject = subject;
    }
    getDetails() {
        super.getStud();
        console.log(`Student Roll.No: ${this.rollno}`);
        console.log(`Student Subject: ${this.subject}`);
        console.log(" ");
    }
}

const stud = [new Details('1', 'Daksh', '96', 'Science'),
new Details('2', 'Soaib', '47', 'Commerce')
];

stud.forEach(stud => stud.getDetails());
